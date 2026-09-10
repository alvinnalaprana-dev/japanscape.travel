// Full-page falling sakura petals — a fixed full-viewport canvas so the effect
// stays visible everywhere the visitor scrolls, not just behind the hero photo.
// Uses hand-shaded raster petal textures (public/images/petal-0..4.png), not flat
// CSS/vector shapes, for a more realistic, slightly-translucent look.
// Per Alvin's request (10 Sep 2026): realistic petals, visible down the whole page.

const PETAL_SRCS = [
  '/images/petal-0.png',
  '/images/petal-1.png',
  '/images/petal-2.png',
  '/images/petal-3.png',
  '/images/petal-4.png'
];

const PARTICLE_COUNT = 24;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

export function mountPetals() {
  // Respect prefers-reduced-motion: skip the animation loop entirely rather
  // than just hiding it with CSS, so it doesn't run in the background.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.className = 'petals-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const images = PETAL_SRCS.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });

  function makeParticle(initial = false) {
    return {
      img: images[Math.floor(Math.random() * images.length)],
      x: rand(0, width),
      y: initial ? rand(-height, height) : rand(-80, -10),
      size: rand(16, 30),
      speedY: rand(14, 30), // px/sec
      swayAmp: rand(18, 46),
      swaySpeed: rand(0.4, 0.9),
      swayPhase: rand(0, Math.PI * 2),
      baseX: 0,
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.6, 0.6),
      opacity: rand(0.55, 0.92)
    };
  }

  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = makeParticle(true);
    p.baseX = p.x;
    particles.push(p);
  }

  let lastT = performance.now();

  function frame(t) {
    const dt = Math.min((t - lastT) / 1000, 0.05);
    lastT = t;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.y += p.speedY * dt;
      p.rotation += p.rotationSpeed * dt;
      const x = p.baseX + Math.sin(t / 1000 * p.swaySpeed + p.swayPhase) * p.swayAmp;

      if (p.y - p.size > height + 20) {
        p.y = rand(-120, -20);
        p.baseX = rand(0, width);
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(x, p.y);
      ctx.rotate(p.rotation);
      if (p.img.complete && p.img.naturalWidth) {
        ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size * 0.86);
      }
      ctx.restore();
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
