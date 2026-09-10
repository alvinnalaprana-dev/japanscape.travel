import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderIntro() {
  const section = document.createElement('section');
  section.className = 'intro';
  section.innerHTML = `
    <p class="intro-eyebrow"></p>
    <p class="intro-body serif"></p>
  `;
  const eyebrowEl = section.querySelector('.intro-eyebrow');
  const bodyEl = section.querySelector('.intro-body');

  function render(lang) {
    const t = site.intro[lang];
    eyebrowEl.textContent = t.eyebrow;
    bodyEl.textContent = t.body;
  }

  onLangChange(render);
  render(getLang());
  return section;
}
