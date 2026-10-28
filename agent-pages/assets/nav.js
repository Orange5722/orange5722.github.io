/* Agent Pages 导航：主站返回 + 页面导航抽屉
 * 用法：在页面 </body> 前加 <script src="/agent-pages/_assets/nav.js" defer></script>
 */
(function () {
  const HOME = 'https://oorange.cn/';
  const INDEX = '/agent-pages/';
  const path = location.pathname.replace(/index\.html$/, '');
  const isIndex = path === INDEX || path === '/agent-pages';

  const ICON = {
    menu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    home: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    grid: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
  };

  const css = `
  .ap-nav-btn{position:fixed;top:16px;left:16px;z-index:9999;width:44px;height:44px;display:flex;align-items:center;justify-content:center;
    border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(16,16,26,.72);color:#eaeaf5;cursor:pointer;
    -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 18px rgba(0,0,0,.35);transition:transform .2s,border-color .2s,background .2s;text-decoration:none}
  .ap-nav-btn:hover{transform:translateY(-1px);border-color:rgba(120,150,255,.55);background:rgba(26,26,42,.85)}
  .ap-nav-btn:active{transform:scale(.96)}
  .ap-drawer{position:fixed;top:0;left:0;bottom:0;width:236px;z-index:9998;padding:76px 14px 18px;box-sizing:border-box;
    background:rgba(12,12,20,.92);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);
    border-right:1px solid rgba(255,255,255,.08);transform:translateX(-102%);transition:transform .28s cubic-bezier(.22,.8,.28,1);
    font-family:"Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif}
  .ap-drawer.open{transform:translateX(0)}
  .ap-drawer a{display:flex;align-items:center;gap:11px;padding:12px 13px;margin-bottom:8px;border-radius:11px;
    color:#dfe0ee;text-decoration:none;font-size:14.5px;transition:background .18s,color .18s}
  .ap-drawer a:hover{background:rgba(255,255,255,.08);color:#fff}
  .ap-drawer a .ap-ico{display:flex;color:#8fb8ff}
  .ap-drawer .ap-tip{margin:18px 4px 0;font-size:11.5px;color:#5c6079;letter-spacing:.04em}
  .ap-overlay{position:fixed;inset:0;z-index:9997;background:rgba(0,0,0,.42);opacity:0;pointer-events:none;transition:opacity .26s}
  .ap-overlay.open{opacity:1;pointer-events:auto}
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // 首页：只放一个小房子
  if (isIndex) {
    const a = document.createElement('a');
    a.className = 'ap-nav-btn';
    a.href = HOME;
    a.title = '返回主站';
    a.setAttribute('aria-label', '返回主站');
    a.innerHTML = ICON.home;
    document.body.appendChild(a);
    return;
  }

  // 子页面：左上角展开按钮 + 抽屉
  const btn = document.createElement('button');
  btn.className = 'ap-nav-btn';
  btn.type = 'button';
  btn.title = '导航';
  btn.setAttribute('aria-label', '打开导航');
  btn.innerHTML = ICON.menu;

  const overlay = document.createElement('div');
  overlay.className = 'ap-overlay';

  const drawer = document.createElement('nav');
  drawer.className = 'ap-drawer';
  drawer.innerHTML =
    '<a href="' + HOME + '"><span class="ap-ico">' + ICON.home + '</span>返回主站</a>' +
    '<a href="' + INDEX + '"><span class="ap-ico">' + ICON.grid + '</span>页面合集</a>' +
    '<p class="ap-tip">AGENT PAGES</p>';

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);
  document.body.appendChild(btn);

  let open = false;
  function setOpen(v) {
    open = v;
    drawer.classList.toggle('open', v);
    overlay.classList.toggle('open', v);
    btn.innerHTML = v ? ICON.close : ICON.menu;
    btn.setAttribute('aria-label', v ? '关闭导航' : '打开导航');
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!open); });
  overlay.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();