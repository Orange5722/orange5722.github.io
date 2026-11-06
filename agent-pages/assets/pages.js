/**
 * APS 页面注册表
 * 新增页面时只改这里：加一条 { href, title, desc, access }
 *
 * access 取值：
 *   "public" —— 游客也能直接访问
 *   "auth"   —— 需要登录/注册，游客点击会被引导去登录页
 *   "admin"  —— 仅管理员可见（普通账号连条目都看不到）
 */
window.APS_PAGES = [
  {
    href: "/agent-pages/friends/",
    title: "朋友们的页面",
    desc: "给朋友做的整活页面合集",
    access: "public"
  },
  {
    href: "/agent-pages/memo/",
    title: "备忘录 Memo",
    desc: "注册登录后可读写自己的备忘",
    access: "auth"
  },
  {
    href: "/agent-pages/bookmarks/",
    title: "网页收藏夹",
    desc: "全部书签，按用途分类",
    access: "admin"
  }
];
