// Home hero — approved direction: soft breathing glow over a full-bleed real client
// photo (sakura canal, from the owner's own trip), paper-toned wash overlay for
// legibility, slow ambient drift on the photo. Tone: quiet resilience, not
// power/dynamism — per Alvin's brief (9 Sep 2026). Falling sakura petals now run as
// a page-wide layer (see src/petals.js) rather than being confined here — per
// Alvin's instruction, 10 Sep 2026, to keep them visible down the whole page.
// Bilingual: ID default, EN toggle lives here and drives every other section
// via src/lang.js (per Alvin's instruction, 10 Sep 2026).

import { site } from '../content/site.js';
import { getLang, setLang, onLangChange } from '../lang.js';

export function renderHero() {
  const section = document.createElement('section');
  section.className = 'hero-stage';

  section.innerHTML = `
    <div class="hero-photo"></div>
    <div class="hero-wash"></div>
    <div class="ring"></div>

    <nav class="hero-nav">
      <span class="wordmark">${site.brand.name}</span>
      <div class="nav-right">
        <div class="links"></div>
        <div class="lang-toggle" role="group" aria-label="Switch language">
          <button type="button" class="lang-opt" data-lang="id">ID</button>
          <span class="lang-sep" aria-hidden="true">/</span>
          <button type="button" class="lang-opt" data-lang="en">EN</button>
        </div>
        <button type="button" class="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" hidden></div>
    </nav>

    <div class="content">
      <div class="eyebrow"></div>
      <h1></h1>
      <p class="sub"></p>
      <a class="cta" href="#kontak"></a>
    </div>

    <div class="scroll-cue"></div>
  `;

  const linksEl = section.querySelector('.links');
  const mobileMenuEl = section.querySelector('.mobile-menu');
  const eyebrowEl = section.querySelector('.eyebrow');
  const h1El = section.querySelector('h1');
  const subEl = section.querySelector('.sub');
  const ctaEl = section.querySelector('.cta');
  const scrollEl = section.querySelector('.scroll-cue');
  const langOpts = section.querySelectorAll('.lang-opt');
  const menuToggle = section.querySelector('.menu-toggle');

  function render(lang) {
    const t = site.hero[lang];
    linksEl.innerHTML = site.nav[lang].map((item) => `<span>${item}</span>`).join('');
    mobileMenuEl.innerHTML = site.nav[lang].map((item) => `<span>${item}</span>`).join('');
    eyebrowEl.textContent = t.eyebrow;
    h1El.textContent = t.headline;
    subEl.textContent = t.sub;
    ctaEl.textContent = t.cta;
    scrollEl.textContent = t.scrollCue;
    langOpts.forEach((el) => {
      const active = el.dataset.lang === lang;
      el.classList.toggle('active', active);
      el.setAttribute('aria-pressed', String(active));
    });
  }

  langOpts.forEach((el) => {
    el.addEventListener('click', () => setLang(el.dataset.lang));
  });
  onLangChange(render);

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenuEl.hasAttribute('hidden') === false;
    if (isOpen) {
      mobileMenuEl.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    } else {
      mobileMenuEl.removeAttribute('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close menu');
    }
  });

  render(getLang());
  return section;
}
