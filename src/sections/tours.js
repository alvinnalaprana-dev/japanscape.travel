import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderTours() {
  const section = document.createElement('section');
  section.className = 'tours';
  section.id = 'tur';
  section.innerHTML = `
    <div class="section-head">
      <p class="eyebrow"></p>
      <h2 class="serif"></h2>
    </div>
    <div class="tour-grid"></div>
    <a class="text-link tours-cta" href="#tur"></a>
  `;

  const eyebrowEl = section.querySelector('.eyebrow');
  const titleEl = section.querySelector('h2');
  const gridEl = section.querySelector('.tour-grid');
  const ctaEl = section.querySelector('.tours-cta');

  function render(lang) {
    const t = site.tours[lang];
    eyebrowEl.textContent = t.eyebrow;
    titleEl.textContent = t.title;
    ctaEl.textContent = `${t.cta} →`;
    gridEl.innerHTML = t.items.map((item, i) => `
      <div class="tour-card">
        <span class="tour-index">0${i + 1}</span>
        <h3 class="serif">${item.region}</h3>
        <p>${item.desc}</p>
      </div>
    `).join('');
  }

  onLangChange(render);
  render(getLang());
  return section;
}
