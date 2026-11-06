/**
 * 网页收藏夹前端
 * 登录复用备忘录账号（同一个 Worker：api.oorange.cn）
 * 数据由 /api/bookmarks 返回，仅 Orange5722 可读
 */
(function () {
  "use strict";

  var API = "https://api.oorange.cn";
  var TOKEN_KEY = "memo_token";
  var USER_KEY = "memo_user";

  var $ = function (id) { return document.getElementById(id); };

  var authView = $("authView");
  var content = $("content");
  var authMsg = $("authMsg");
  var userbar = $("userbar");

  function setMsg(text, type) {
    authMsg.textContent = text || "";
    authMsg.className = "msg" + (type ? " " + type : "");
  }

  function token() { return localStorage.getItem(TOKEN_KEY) || ""; }

  function saveSession(t, u) {
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(USER_KEY, u || "");
  }

  function clearSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  function api(path, options) {
    options = options || {};
    var headers = { "Content-Type": "application/json" };
    if (token()) headers.Authorization = "Bearer " + token();
    return fetch(API + path, {
      method: options.method || "GET",
      headers: headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (!res.ok) {
          var err = new Error((data && data.error) || ("请求失败 HTTP " + res.status));
          err.status = res.status;
          throw err;
        }
        return data;
      });
    });
  }

  /* ---------- 渲染 ---------- */

  function hostOf(url) {
    try { return new URL(url).host; } catch (e) { return url; }
  }

  function makeIcon(item) {
    var wrap = document.createElement("div");
    wrap.className = "icon";

    var host = hostOf(item.url);
    var letter = (item.name || "?").trim().charAt(0).toUpperCase();
    wrap.textContent = letter;

    // 尝试抓站点自己的 favicon，失败就保留首字母
    var img = new Image();
    img.src = "https://" + host + "/favicon.ico";
    img.alt = "";
    img.onload = function () {
      if (img.naturalWidth >= 8) {
        wrap.textContent = "";
        wrap.appendChild(img);
      }
    };
    img.onerror = function () { /* 保留首字母 */ };

    return wrap;
  }

  function makeCard(item) {
    var a = document.createElement("a");
    a.className = "site";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var info = document.createElement("div");
    info.className = "info";

    var name = document.createElement("div");
    name.className = "name";
    name.textContent = item.name;

    var host = document.createElement("div");
    host.className = "host";
    host.textContent = hostOf(item.url);

    var desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = item.desc || "";

    info.append(name, host, desc);
    a.append(makeIcon(item), info);
    return a;
  }

  function render(categories) {
    var sections = $("sections");
    var toc = $("toc");
    sections.innerHTML = "";
    toc.innerHTML = "";

    var total = 0;

    categories.forEach(function (cat) {
      total += cat.items.length;

      var sec = document.createElement("section");
      sec.className = "section";
      sec.id = cat.id;

      var head = document.createElement("div");
      head.className = "section-head";

      var h2 = document.createElement("h2");
      h2.textContent = cat.title;

      var count = document.createElement("span");
      count.className = "count";
      count.textContent = cat.items.length + " 项";

      head.append(h2, count);

      var desc = document.createElement("p");
      desc.className = "desc";
      desc.textContent = cat.desc || "";

      var hr = document.createElement("hr");

      var grid = document.createElement("div");
      grid.className = "grid";
      cat.items.forEach(function (item) { grid.appendChild(makeCard(item)); });

      sec.append(head, desc, hr, grid);
      sections.appendChild(sec);

      var jump = document.createElement("a");
      jump.href = "#" + cat.id;
      jump.textContent = cat.title;
      toc.appendChild(jump);
    });

    $("total").textContent = String(total);
  }

  /* ---------- 流程 ---------- */

  function showContent() {
    authView.classList.add("hidden");
    content.classList.remove("hidden");
    userbar.classList.remove("hidden");
    $("who").textContent = localStorage.getItem(USER_KEY) || "";
  }

  function showAuth(msg) {
    content.classList.add("hidden");
    userbar.classList.add("hidden");
    authView.classList.remove("hidden");
    if (msg) setMsg(msg, "err");
  }
  function showForbidden(msg) {
    content.classList.add("hidden");
    userbar.classList.add("hidden");
    authView.classList.remove("hidden");
    authView.innerHTML = "";
    var h = document.createElement("h2");
    h.className = "card-title";
    h.textContent = "没有权限";
    var p = document.createElement("p");
    p.className = "msg err";
    p.textContent = msg || "该页面仅限管理员访问";
    var back = document.createElement("p");
    back.style.marginTop = "18px";
    var a = document.createElement("a");
    a.href = "/agent-pages/";
    a.style.color = "#6f9bff";
    a.textContent = "← 返回页面列表";
    back.appendChild(a);
    authView.append(h, p, back);
  }

  function load() {
    return api("/api/bookmarks").then(function (data) {
      render(data.categories || []);
      showContent();
    });
  }

  function doLogin(e) {
    e && e.preventDefault();
    var u = $("username").value.trim();
    var p = $("password").value;
    if (!u || !p) return setMsg("用户名和密码都要填", "err");

    setMsg("登录中…");
    api("/api/login", { method: "POST", body: { username: u, password: p } })
      .then(function (data) {
        saveSession(data.token, data.username);
        $("password").value = "";
        setMsg("");
        return load();
      })
      .catch(function (err) {
        setMsg(err.message, "err");
      });
  }

  function doLogout() {
    api("/api/logout", { method: "POST" }).catch(function () {});
    clearSession();
    $("sections").innerHTML = "";
    $("toc").innerHTML = "";
    showAuth("已退出登录");
  }

  $("authForm").addEventListener("submit", doLogin);
  $("logoutBtn").addEventListener("click", doLogout);

  (function init() {
    if (!token()) return showAuth();
    load().catch(function (err) {
      if (err.status === 401) { clearSession(); showAuth("登录已过期，请重新登录"); }
      else if (err.status === 403) { showForbidden(err.message); }
      else { showAuth(err.message); }
    });
  })();
})();
