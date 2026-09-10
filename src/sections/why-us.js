import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderWhyUs() {
  const section = document.createElement('section');
  section.className = 'why-us';
  section.innerHTML = `
    <div class="section-head">
      <p class="eyebrow"></p>
      <h2 class="serif"></h2>
    </div>
    <div class="why-grid"></div>
  `;

  const eyebrowEl = section.querySelector('.eyebrow');
  const titleEl = section.querySelector('h2');
  const gridEl = section.querySelector('.why-grid');

  function render(lang) {
    const t = site.whyUs[lang];
    eyebrowEl.textContent = t.eyebrow;
    titleEl.textContent = t.title;
    gridEl.innerHTML = t.points.map((p, i) => `
      <div class="why-item">
        <span class="why-mark">0${i + 1}</span>
        <h3 class="serif">${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `).join('');
  }

  onLangChange(render);
  render(getLang());
  return section;
}
