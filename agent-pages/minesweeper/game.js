/**
 * 扫雷 Minesweeper
 * 纯前端实现：首点必安全、空白区自动展开、双击数字快速展开、移动端长按插旗
 */
(function () {
  "use strict";

  const LEVELS = {
    easy:   { rows: 9,  cols: 9,  mines: 10, name: "初级" },
    medium: { rows: 16, cols: 16, mines: 40, name: "中级" },
    hard:   { rows: 16, cols: 30, mines: 99, name: "高级" },
  };

  const boardEl   = document.getElementById("board");
  const mineCountEl = document.getElementById("mineCount");
  const timerEl   = document.getElementById("timer");
  const faceEl    = document.getElementById("face");
  const overlay   = document.getElementById("overlay");
  const overlayText = document.getElementById("overlayText");
  const againBtn  = document.getElementById("againBtn");
  const levelsEl  = document.getElementById("levels");
  const flagModeBtn = document.getElementById("flagMode");
  const bestEl    = document.getElementById("best");

  let level = "easy";
  let rows, cols, mines;
  let cells = [];        // { mine, open, flag, adj }
  let cellEls = [];      // DOM
  let started = false;
  let over = false;
  let flags = 0;
  let opened = 0;
  let timer = 0;
  let timerId = null;
  let flagMode = false;

  /* ---------------- 初始化 ---------------- */

  function newGame() {
    const cfg = LEVELS[level];
    rows = cfg.rows;
    cols = cfg.cols;
    mines = cfg.mines;

    cells = Array.from({ length: rows * cols }, () => ({
      mine: false, open: false, flag: false, adj: 0,
    }));

    started = false;
    over = false;
    flags = 0;
    opened = 0;
    timer = 0;
    clearInterval(timerId);
    timerId = null;

    timerEl.textContent = "0";
    mineCountEl.textContent = String(mines);
    faceEl.textContent = "🙂";
    overlay.classList.add("hidden");
    overlay.className = "overlay hidden";

    renderBoard();
    updateBest();
  }

  function renderBoard() {
    const size = cellSize();

    boardEl.style.gridTemplateColumns = `repeat(${cols}, ${size}px)`;
    boardEl.innerHTML = "";
    cellEls = [];

    for (let i = 0; i < rows * cols; i++) {
      const el = document.createElement("div");
      el.className = "cell";
      el.dataset.i = String(i);
      boardEl.appendChild(el);
      cellEls.push(el);
    }
  }

  function cellSize() {
    const cfg = LEVELS[level];
    const maxWidth = Math.min(window.innerWidth * 0.94, 760) - 40;
    const raw = Math.floor((maxWidth - (cfg.cols - 1) * 2) / cfg.cols);
    return Math.max(22, Math.min(raw, level === "hard" ? 30 : 36));
  }

  /* ---------------- 布雷（首点安全） ---------------- */

  function placeMines(safeIndex) {
    const sr = Math.floor(safeIndex / cols);
    const sc = safeIndex % cols;
    const forbidden = new Set();

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = sr + dr, c = sc + dc;
        if (r >= 0 && r < rows && c >= 0 && c < cols) forbidden.add(r * cols + c);
      }
    }

    // 地雷太多时，安全区收缩为仅点击格
    let pool = [];
    for (let i = 0; i < rows * cols; i++) if (!forbidden.has(i)) pool.push(i);
    if (pool.length < mines) {
      pool = [];
      for (let i = 0; i < rows * cols; i++) if (i !== safeIndex) pool.push(i);
    }

    // Fisher-Yates 洗牌取前 mines 个
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    for (let k = 0; k < mines; k++) cells[pool[k]].mine = true;

    // 计算相邻雷数
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].mine) continue;
      let n = 0;
      forEachNeighbor(i, (j) => { if (cells[j].mine) n++; });
      cells[i].adj = n;
    }
  }

  function forEachNeighbor(index, fn) {
    const r = Math.floor(index / cols);
    const c = index % cols;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) fn(nr * cols + nc);
      }
    }
  }

  /* ---------------- 交互 ---------------- */

  function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
      timer++;
      timerEl.textContent = String(timer);
    }, 1000);
  }

  function reveal(index) {
    const cell = cells[index];
    if (over || cell.open || cell.flag) return;

    if (!started) {
      placeMines(index);
      started = true;
      startTimer();
    }

    if (cell.mine) {
      cell.open = true;
      lose(index);
      return;
    }

    floodReveal(index);
    paint();

    if (opened === rows * cols - mines) win();
  }

  function floodReveal(start) {
    const stack = [start];
    while (stack.length) {
      const i = stack.pop();
      const cell = cells[i];
      if (cell.open || cell.flag) continue;
      if (cell.mine) continue;

      cell.open = true;
      opened++;
      if (cell.adj === 0) {
        forEachNeighbor(i, (j) => {
          if (!cells[j].open && !cells[j].flag && !cells[j].mine) stack.push(j);
        });
      }
    }
  }

  function toggleFlag(index) {
    const cell = cells[index];
    if (over || cell.open) return;

    if (!cell.flag && flags >= mines) return; // 旗子用完
    cell.flag = !cell.flag;
    flags += cell.flag ? 1 : -1;
    mineCountEl.textContent = String(mines - flags);
    paint();
  }

  function chord(index) {
    const cell = cells[index];
    if (over || !cell.open || cell.adj === 0) return;

    let flagCount = 0;
    const targets = [];
    forEachNeighbor(index, (j) => {
      if (cells[j].flag) flagCount++;
      else if (!cells[j].open) targets.push(j);
    });

    if (flagCount !== cell.adj) return;
    targets.forEach((j) => { if (!over) reveal(j); });
  }

  /* ---------------- 渲染 ---------------- */

  function paint() {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const el = cellEls[i];
      let cls = "cell";
      let text = "";

      if (cell.open) {
        cls += " open";
        if (cell.mine) {
          cls += " mine";
          text = "💥";
        } else if (cell.adj > 0) {
          cls += " n" + cell.adj;
          text = String(cell.adj);
        }
      } else if (cell.flag) {
        cls += " flag";
        text = "🚩";
      }

      if (el.className !== cls) el.className = cls;
      if (el.textContent !== text) el.textContent = text;
    }
  }

  function markExploded(index) {
    cellEls[index].classList.add("exploded");
  }

  /* ---------------- 胜负 ---------------- */

  function lose(explodedIndex) {
    over = true;
    clearInterval(timerId);
    timerId = null;
    faceEl.textContent = "😵";

    // 揭晓所有雷，错误的旗标出来
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].mine && !cells[i].flag) {
        cellEls[i].className = "cell open mine";
        cellEls[i].textContent = "💣";
      } else if (!cells[i].mine && cells[i].flag) {
        cellEls[i].className = "cell wrong";
        cellEls[i].textContent = "✖";
      }
    }

    // 最后标记被踩中的那一格（要在上面的循环之后，否则会被覆盖）
    cellEls[explodedIndex].className = "cell open mine exploded";
    cellEls[explodedIndex].textContent = "💥";

    showOverlay(false);
  }

  function win() {
    over = true;
    clearInterval(timerId);
    timerId = null;
    faceEl.textContent = "😎";

    // 自动插满剩余旗子
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].mine && !cells[i].flag) {
        cells[i].flag = true;
        flags++;
      }
    }
    mineCountEl.textContent = String(mines - flags);
    paint();

    saveBest();
    showOverlay(true);
  }

  function showOverlay(isWin) {
    overlayText.textContent = isWin
      ? `🎉 通关！用时 ${timer} 秒`
      : "💥 踩雷了";
    overlay.className = "overlay " + (isWin ? "win" : "lose");
  }

  /* ---------------- 最佳成绩 ---------------- */

  function bestKey() { return "minesweeper_best_" + level; }

  function saveBest() {
    const key = bestKey();
    const prev = Number(localStorage.getItem(key) || 0);
    if (!prev || timer < prev) {
      localStorage.setItem(key, String(timer));
      updateBest(true);
    }
  }

  function updateBest(isNew) {
    const key = bestKey();
    const best = Number(localStorage.getItem(key) || 0);
    const name = LEVELS[level].name;
    bestEl.textContent = best
      ? `🏆 ${name}最佳：${best} 秒${isNew ? "（新纪录！）" : ""}`
      : `🏆 ${name}暂无最佳记录`;
  }

  /* ---------------- 事件绑定 ---------------- */

  boardEl.addEventListener("contextmenu", (e) => e.preventDefault());

  boardEl.addEventListener("mousedown", (e) => {
    const el = e.target.closest(".cell");
    if (!el) return;
    const i = Number(el.dataset.i);

    if (e.button === 2) {
      toggleFlag(i);
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;

    if (flagMode) toggleFlag(i);
    else reveal(i);
  });

  boardEl.addEventListener("dblclick", (e) => {
    const el = e.target.closest(".cell");
    if (!el) return;
    chord(Number(el.dataset.i));
  });

  // 移动端长按插旗
  let pressTimer = null;
  let pressIndex = -1;
  let longPressed = false;

  boardEl.addEventListener("touchstart", (e) => {
    const el = e.target.closest(".cell");
    if (!el) return;
    pressIndex = Number(el.dataset.i);
    longPressed = false;
    pressTimer = setTimeout(() => {
      longPressed = true;
      toggleFlag(pressIndex);
    }, 420);
  }, { passive: true });

  boardEl.addEventListener("touchend", (e) => {
    clearTimeout(pressTimer);
    if (longPressed) {
      e.preventDefault();
      longPressed = false;
      return;
    }
    const el = e.target.closest(".cell");
    if (!el) return;
    // touchstart 已经过了 420ms 判定，这里补一次普通点击
    const i = Number(el.dataset.i);
    if (flagMode) toggleFlag(i);
    else reveal(i);
    e.preventDefault();
  });

  boardEl.addEventListener("touchmove", () => {
    clearTimeout(pressTimer);
  }, { passive: true });

  levelsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".lv");
    if (!btn) return;
    level = btn.dataset.level;
    [...levelsEl.children].forEach((b) => b.classList.toggle("active", b === btn));
    newGame();
  });

  faceEl.addEventListener("click", newGame);
  againBtn.addEventListener("click", newGame);

  flagModeBtn.addEventListener("click", () => {
    flagMode = !flagMode;
    flagModeBtn.setAttribute("aria-pressed", String(flagMode));
    flagModeBtn.innerHTML = flagMode
      ? '<span class="fm-ico">🚩</span> 插旗模式（点击切换为挖开）'
      : '<span class="fm-ico">⛏</span> 挖开模式（点击切换为插旗）';
  });

  window.addEventListener("resize", () => {
    if (!started && !over) {
      renderBoard();
      paint();
    }
  });

  /* ---------------- 启动 ---------------- */

  newGame();
})();
