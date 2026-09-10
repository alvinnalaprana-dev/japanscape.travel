import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderCtaBanner() {
  const section = document.createElement('section');
  section.className = 'cta-banner';
  section.innerHTML = `
    <h2 class="serif"></h2>
    <p class="cta-sub"></p>
    <a class="cta cta-light" href="#kontak"></a>
  `;

  const titleEl = section.querySelector('h2');
  const subEl = section.querySelector('.cta-sub');
  const ctaEl = section.querySelector('.cta-light');

  function render(lang) {
    const t = site.ctaBanner[lang];
    titleEl.textContent = t.title;
    subEl.textContent = t.sub;
    ctaEl.textContent = t.cta;
  }

  onLangChange(render);
  render(getLang());
  return section;
}
