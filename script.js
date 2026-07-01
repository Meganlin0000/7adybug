/* 7aDy.bug — interactions (vanilla, no deps) */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var M = window.MEMBERS || [];

  /* scroll progress */
  var bar = document.querySelector('.progress');
  addEventListener('scroll', function () {
    var h = document.documentElement;
    if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100).toFixed(2) + '%';
  }, { passive: true });

  /* mobile menu */
  var mb = document.querySelector('[data-menu]');
  if (mb) {
    mb.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* current nav */
  var map = { home:'index.html', about:'about.html', works:'works.html', services:'services.html', contact:'contact.html', member:'about.html' };
  var page = document.body.getAttribute('data-page');
  if (map[page]) document.querySelectorAll('#nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === map[page] && !a.classList.contains('btn')) a.classList.add('current');
  });

  /* team card markup */
  function card(m) {
    return '<a class="person" href="member.html?id=' + m.id + '">'
      + '<div class="frame"><img src="' + m.photo + '" alt="' + m.name + '｜' + m.role + '" loading="lazy">'
      + '<span class="view">查看介紹 →</span></div>'
      + '<div class="meta"><span class="idx">' + m.id + '</span><h3>' + m.name + '</h3>'
      + '<p class="role">' + m.role + '</p></div></a>';
  }
  var prev = document.getElementById('team-preview');
  if (prev) prev.innerHTML = M.slice(0, 4).map(card).join('');
  var full = document.getElementById('team-full');
  if (full) full.innerHTML = M.map(card).join('');

  /* member detail */
  var root = document.getElementById('member-root');
  if (root && M.length) {
    var id = new URLSearchParams(location.search).get('id') || '01';
    var i = M.findIndex(function (m) { return m.id === id; });
    if (i < 0) i = 0;
    var m = M[i], prevM = M[(i - 1 + M.length) % M.length], nextM = M[(i + 1) % M.length];
    document.title = m.name + '｜7aDy.bug';
    root.innerHTML =
      '<div class="member-back reveal in"><a href="about.html">← 回團隊</a></div>'
      + '<div class="member-hero">'
      + '<div class="member-photo reveal in"><img src="' + m.photo + '" alt="' + m.name + '"></div>'
      + '<div class="member-info reveal in">'
      + '<p class="idx">Member ' + m.id + ' / 07</p>'
      + '<h1>' + m.name + '</h1>'
      + '<p class="role">' + m.role + '</p>'
      + '<div class="bio">' + m.bio.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>'
      + '<div class="member-block"><h4>專長</h4><div class="chips">'
      + m.focus.map(function (f, k) { return '<span class="chip' + (k === 0 ? ' solid' : '') + '">' + f + '</span>'; }).join('')
      + '</div></div>'
      + '</div></div>'
      + '<div class="member-nav">'
      + '<a href="member.html?id=' + prevM.id + '">← ' + prevM.name + '</a>'
      + '<a href="member.html?id=' + nextM.id + '">' + nextM.name + ' →</a>'
      + '</div>';
  }

  /* reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e, k) {
        if (e.isIntersecting) { var el = e.target; setTimeout(function () { el.classList.add('in'); }, Math.min(k * 45, 180)); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* count-up */
  function count(el) {
    var t = parseFloat(el.dataset.count); if (isNaN(t)) return;
    var suf = el.dataset.suffix || '', dec = (String(t).split('.')[1] || '').length;
    if (reduce) { el.textContent = t + suf; return; }
    var s = performance.now();
    (function step(now) {
      var p = Math.min((now - s) / 1300, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (t * e).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = t.toFixed(dec) + suf;
    })(s);
  }
  var cs = document.querySelectorAll('[data-count]');
  if (cs.length) {
    if (!('IntersectionObserver' in window)) cs.forEach(count);
    else {
      var cio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      cs.forEach(function (el) { cio.observe(el); });
    }
  }
})();
