/* 站点访问统计（替代不蒜子）
 * 后端：Cloudflare Worker + D1 —— https://api.oorange.cn/api/stats/hit
 * 对外暴露的 DOM 结构沿用主题的 #busuanzi_value_site_uv / #busuanzi_value_site_pv
 */
(function () {
  "use strict";

  var API = "https://api.oorange.cn/api/stats/hit";
  var KEY = "blog_visitor_id";

  function randomId() {
    var bytes = new Uint8Array(16);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(bytes);
    } else {
      for (var i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    }
    var out = "";
    for (var j = 0; j < bytes.length; j++) out += ("0" + bytes[j].toString(16)).slice(-2);
    return out;
  }

  function visitorId() {
    try {
      var id = localStorage.getItem(KEY);
      if (!id) {
        id = randomId();
        localStorage.setItem(KEY, id);
      }
      return id;
    } catch (e) {
      return randomId();
    }
  }

  function format(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = format(value);
  }

  function run() {
    if (!document.getElementById("busuanzi")) return;

    var path = location.pathname;
    if (path.length > 200) path = path.slice(0, 200);

    var payload = JSON.stringify({ path: path, visitorId: visitorId() });

    var req;
    if (window.fetch) {
      req = fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        mode: "cors"
      }).then(function (r) { return r.json(); });
    } else {
      req = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", API, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          try { resolve(JSON.parse(xhr.responseText)); } catch (e) { reject(e); }
        };
        xhr.onerror = reject;
        xhr.send(payload);
      });
    }

    req.then(function (data) {
      if (!data || !data.ok) return;
      setText("busuanzi_value_site_uv", data.site_uv);
      setText("busuanzi_value_site_pv", data.site_pv);
    }).catch(function () {
      /* 统计失败就不显示数字，不影响页面 */
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();