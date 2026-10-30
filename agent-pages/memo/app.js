/**
 * 备忘录前端
 * 部署路径：https://oorange.cn/agent-pages/memo/
 * 后端：Cloudflare Worker（部署后把地址填到下面 API_BASE）
 */

// ⚠️ 部署 Worker 后替换成实际地址，例如：
// const API_BASE = "https://memo-worker.你的子域.workers.dev";
const API_BASE = "https://memo-worker.orange5722.workers.dev";

const TOKEN_KEY = "memo_token";
const USER_KEY = "memo_user";

const $ = (id) => document.getElementById(id);

const authView = $("authView");
const memoView = $("memoView");
const authMsg = $("authMsg");
const memoMsg = $("memoMsg");
const memoList = $("memoList");
const emptyTip = $("emptyTip");
const userbar = $("userbar");

function setMsg(el, text, type) {
  el.textContent = text || "";
  el.className = "msg" + (type ? " " + type : "");
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}

function setSession(token, username) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, username || "");
  } else {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}

async function api(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  const token = getToken();
  if (token) headers.Authorization = "Bearer " + token;

  const res = await fetch(API_BASE + path, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = { error: "响应解析失败（HTTP " + res.status + "）" };
  }

  if (!res.ok) {
    const err = new Error(data && data.error ? data.error : "请求失败（HTTP " + res.status + "）");
    err.status = res.status;
    throw err;
  }
  return data;
}

/* ---------------- 视图切换 ---------------- */

function showAuth() {
  authView.classList.remove("hidden");
  memoView.classList.add("hidden");
  userbar.classList.add("hidden");
}

function showMemo(username) {
  authView.classList.add("hidden");
  memoView.classList.remove("hidden");
  userbar.classList.remove("hidden");
  $("who").textContent = username || localStorage.getItem(USER_KEY) || "";
}

/* ---------------- 认证 ---------------- */

async function doLogin() {
  const username = $("username").value.trim();
  const password = $("password").value;
  if (!username || !password) return setMsg(authMsg, "用户名和密码都要填", "err");

  setMsg(authMsg, "登录中…");
  try {
    const data = await api("/api/login", { method: "POST", body: { username, password } });
    setSession(data.token, data.username);
    setMsg(authMsg, "");
    $("password").value = "";
    showMemo(data.username);
    await loadMemos();
  } catch (e) {
    setMsg(authMsg, e.message, "err");
  }
}

async function doRegister() {
  const username = $("username").value.trim();
  const password = $("password").value;
  if (!username || !password) return setMsg(authMsg, "用户名和密码都要填", "err");

  setMsg(authMsg, "注册中…");
  try {
    await api("/api/register", { method: "POST", body: { username, password } });
    setMsg(authMsg, "注册成功，正在登录…", "ok");
    await doLogin();
  } catch (e) {
    setMsg(authMsg, e.message, "err");
  }
}

async function doLogout() {
  try {
    await api("/api/logout", { method: "POST" });
  } catch {
    /* token 已失效也无所谓 */
  }
  setSession(null);
  memoList.innerHTML = "";
  showAuth();
  setMsg(authMsg, "已退出登录");
}

/* ---------------- 备忘录 ---------------- */

function fmtTime(sec) {
  if (!sec) return "";
  const d = new Date(sec * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function renderMemos(memos) {
  memoList.innerHTML = "";
  emptyTip.classList.toggle("hidden", memos.length > 0);

  for (const memo of memos) {
    const li = document.createElement("li");
    li.className = "memo-item";

    const content = document.createElement("div");
    content.className = "memo-content";
    content.textContent = memo.content;

    const meta = document.createElement("div");
    meta.className = "memo-meta";

    const time = document.createElement("span");
    time.textContent = fmtTime(memo.created_at) +
      (memo.updated_at && memo.updated_at !== memo.created_at ? "（已编辑）" : "");

    const actions = document.createElement("div");
    actions.className = "memo-actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "编辑";
    editBtn.onclick = () => startEdit(li, memo);

    const delBtn = document.createElement("button");
    delBtn.textContent = "删除";
    delBtn.className = "del";
    delBtn.onclick = () => removeMemo(memo.id, li);

    actions.append(editBtn, delBtn);
    meta.append(time, actions);
    li.append(content, meta);
    memoList.append(li);
  }
}

function startEdit(li, memo) {
  li.innerHTML = "";

  const input = document.createElement("textarea");
  input.rows = 3;
  input.value = memo.content;

  const actions = document.createElement("div");
  actions.className = "memo-actions";
  actions.style.marginTop = "12px";

  const save = document.createElement("button");
  save.textContent = "保存";
  save.className = "primary";
  save.onclick = async () => {
    const content = input.value.trim();
    if (!content) return alert("内容不能为空");
    try {
      await api("/api/memos/" + memo.id, { method: "PUT", body: { content } });
      await loadMemos();
    } catch (e) {
      alert(e.message);
    }
  };

  const cancel = document.createElement("button");
  cancel.textContent = "取消";
  cancel.onclick = () => loadMemos();

  actions.append(save, cancel);
  li.append(input, actions);
  input.focus();
}

async function removeMemo(id, li) {
  if (!confirm("确定删除这条备忘录？")) return;
  try {
    await api("/api/memos/" + id, { method: "DELETE" });
    li.remove();
    const left = memoList.querySelectorAll(".memo-item").length;
    emptyTip.classList.toggle("hidden", left > 0);
  } catch (e) {
    alert(e.message);
  }
}

async function addMemo() {
  const input = $("memoInput");
  const content = input.value.trim();
  if (!content) return setMsg(memoMsg, "内容不能为空", "err");

  setMsg(memoMsg, "保存中…");
  try {
    await api("/api/memos", { method: "POST", body: { content } });
    input.value = "";
    setMsg(memoMsg, "已添加", "ok");
    await loadMemos();
  } catch (e) {
    setMsg(memoMsg, e.message, "err");
  }
}

async function loadMemos() {
  try {
    const data = await api("/api/memos");
    renderMemos(data.memos || []);
  } catch (e) {
    if (e.status === 401) {
      setSession(null);
      showAuth();
      setMsg(authMsg, "登录已过期，请重新登录", "err");
      return;
    }
    setMsg(memoMsg, e.message, "err");
  }
}

/* ---------------- 初始化 ---------------- */

$("authForm").addEventListener("submit", (e) => {
  e.preventDefault();
  doLogin();
});
$("registerBtn").addEventListener("click", doRegister);
$("logoutBtn").addEventListener("click", doLogout);
$("addBtn").addEventListener("click", addMemo);

$("memoInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    addMemo();
  }
});

(async function init() {
  if (!getToken()) return showAuth();
  try {
    await api("/api/memos");
    showMemo(localStorage.getItem(USER_KEY));
    await loadMemos();
  } catch (e) {
    setSession(null);
    showAuth();
    if (e.status !== 401) setMsg(authMsg, e.message, "err");
  }
})();
