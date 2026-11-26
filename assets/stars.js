// Fixed background starfield: a few hundred small stars, denser along a diagonal band, twinkling slowly.
(function stars(cv) {
  const ctx = cv.getContext('2d');
  let pts = [];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const resize = () => {
    const d = Math.min(2, devicePixelRatio || 1);
    cv.width = innerWidth * d; cv.height = innerHeight * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    const n = Math.round((innerWidth * innerHeight) / 4200);
    pts = Array.from({ length: n }, () => {
      // Half the stars sit near the band running from lower left to upper right.
      let x = Math.random() * innerWidth, y = Math.random() * innerHeight;
      if (Math.random() < 0.5) { const s = Math.random(); x = s * innerWidth; y = innerHeight * (0.95 - s * 0.8) + (Math.random() - 0.5) * innerHeight * 0.22; }
      return { x, y, r: Math.random() < 0.06 ? 1.3 : 0.35 + Math.random() * 0.65, a: 0.25 + Math.random() * 0.6, p: Math.random() * 6.28 };
    });
    draw(0);
  };
  const draw = (t) => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const s of pts) {
      ctx.globalAlpha = s.a * (0.65 + 0.35 * Math.sin(t * 0.0012 + s.p));
      ctx.fillStyle = s.r > 1 ? '#ffffff' : '#c8d8f0';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.29); ctx.fill();
    }
  };
  addEventListener('resize', resize);
  resize();
  if (still) return;
  let last = 0;
  const loop = (t) => {
    requestAnimationFrame(loop);
    if (t - last < 66 || document.hidden) return;
    last = t;
    draw(t);
  };
  requestAnimationFrame(loop);
})(document.getElementById('stars'));
