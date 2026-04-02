/**
 * Cosmic starfield — Canvas 2D only (no WebGL, no ES modules).
 * Works with file://, static hosts, and simple HTML pages.
 */
(function () {
  var container = document.getElementById('cosmic-bg');
  if (!container) return;

  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  var ship = document.createElement('img');
  ship.className = 'cosmic-ship';
  ship.src = 'assets/ship.png';
  ship.alt = '';
  ship.setAttribute('aria-hidden', 'true');
  ship.decoding = 'async';
  container.appendChild(ship);

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var BG = '#020617';
  var count = 2200;
  var stars = new Float32Array(count * 4);
  var i;
  for (i = 0; i < count; i++) {
    var u = Math.random() * Math.PI * 2;
    var v = Math.random() * 2 - 1;
    var r = Math.cbrt(Math.random());
    var phi = Math.acos(v);
    var sinP = Math.sin(phi);
    stars[i * 4] = r * sinP * Math.cos(u);
    stars[i * 4 + 1] = r * sinP * Math.sin(u);
    stars[i * 4 + 2] = r * Math.cos(phi) * 0.55;
    stars[i * 4 + 3] = Math.random();
  }

  var width = 0;
  var height = 0;
  var dpr = 1;
  var rotY = 0;
  var rotX = 0;
  var last = performance.now();
  var reducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  function drawFrame(now) {
    requestAnimationFrame(drawFrame);
    var dt = reducedMotion ? 0 : (now - last) / 1000;
    last = now;
    rotY += dt * 0.02;
    rotX += dt * 0.01;

    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, width, height);

    var cx = width * 0.5;
    var cy = height * 0.5;
    // Separate X/Y scale so wide viewports fill the full width (min(w,h) left empty sides).
    var scaleX = width * 0.46;
    var scaleY = height * 0.48;
    var cosY = Math.cos(rotY);
    var sinY = Math.sin(rotY);
    var cosX = Math.cos(rotX);
    var sinX = Math.sin(rotX);
    var camZ = 1.85;

    for (i = 0; i < count; i++) {
      var bx = stars[i * 4];
      var by = stars[i * 4 + 1];
      var bz = stars[i * 4 + 2];
      var x = bx * cosY - bz * sinY;
      var z = bx * sinY + bz * cosY;
      var y = by;
      var y2 = y * cosX - z * sinX;
      var z2 = y * sinX + z * cosX;
      var proj = camZ / (camZ - z2);
      if (proj <= 0 || proj > 12) continue;
      var px = cx + x * scaleX * proj;
      var py = cy + y2 * scaleY * proj;
      if (px < -4 || px > width + 4 || py < -4 || py > height + 4) continue;
      var seed = stars[i * 4 + 3];
      var size = (0.28 + seed * 0.85) * proj * 0.9;
      var alpha = (0.1 + seed * 0.55) * Math.min(1, proj * 0.45);

      if (seed > 0.88) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(96, 165, 250, ' + alpha * 0.22 + ')';
        ctx.arc(px, py, size * 3.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.fillStyle = 'rgba(219, 234, 254, ' + alpha + ')';
      ctx.arc(px, py, Math.max(0.35, size), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  requestAnimationFrame(drawFrame);
})();
