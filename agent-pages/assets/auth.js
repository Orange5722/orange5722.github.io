/**
 * APS 统一登录工具
 * 所有 agent-pages 下的页面都可以直接引用：
 *   <script src="/agent-pages/assets/auth.js"></script>
 *
 * 用法：
 *   APS.token()                  -> 当前 token（没有则空串）
 *   APS.isLoggedIn()             -> 是否已登录（只判断本地有没有 token）
 *   APS.me()                     -> Promise<{username, role}>，失败抛错
 *   APS.requireAuth(next)        -> 未登录则跳转统一登录页，返回 false
 *   APS.requireAdmin(next)       -> 非管理员则跳转/拦截，返回 Promise<boolean>
 *   APS.loginUrl(next)           -> 生成带 next 的登录地址
 *   APS.logout()                 -> 清本地登录态并回登录页
 */
(function () {
  var API = "https://api.oorange.cn";
  var TOKEN_KEY = "memo_token";
  var USER_KEY = "memo_user";

  function token() {
    try { return localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; }
  }

  function isLoggedIn() {
    return !!token();
  }

  function loginUrl(next) {
    var target = next || (location.pathname + location.search);
    if (target.indexOf("/agent-pages/") !== 0) target = "/agent-pages/";
    return "/agent-pages/login/?next=" + encodeURIComponent(target);
  }

  function me() {
    if (!token()) return Promise.reject(new Error("未登录"));
    return fetch(API + "/api/me", {
      headers: { Authorization: "Bearer " + token() }
    }).then(function (r) {
      if (!r.ok) {
        var err = new Error(r.status === 401 ? "登录已过期" : "获取用户信息失败");
        err.status = r.status;
        throw err;
      }
      return r.json();
    });
  }

  function requireAuth(next) {
    if (isLoggedIn()) return true;
    location.replace(loginUrl(next));
    return false;
  }

  function requireAdmin(next) {
    var here = next || (location.pathname + location.search);
    if (!isLoggedIn()) {
      location.replace(loginUrl(here));
      return Promise.resolve(false);
    }
    return me().then(function (u) {
      if (u.role === "admin") return true;
      location.replace("/agent-pages/denied/?next=" + encodeURIComponent(here));
      return false;
    }).catch(function () {
      location.replace(loginUrl(here));
      return false;
    });
  }

  function logout() {
    var t = token();
    var done = function () {
      try {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      } catch (e) {}
      location.replace("/agent-pages/login/");
    };
    if (!t) return done();
    fetch(API + "/api/logout", {
      method: "POST",
      headers: { Authorization: "Bearer " + t }
    }).catch(function () {}).then(done);
  }

  window.APS = {
    API: API,
    token: token,
    isLoggedIn: isLoggedIn,
    me: me,
    loginUrl: loginUrl,
    requireAuth: requireAuth,
    requireAdmin: requireAdmin,
    logout: logout
  };
})();
