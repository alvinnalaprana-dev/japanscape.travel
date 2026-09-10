// Placeholder content — no real client testimonials collected yet (the trip-photo
// triage that would surface consenting testimonials is still deferred). Quote and
// attribution here are illustrative copy, not a real client statement, and are
// visibly marked as such so this never gets mistaken for a genuine testimonial.

import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderTestimonials() {
  const section = document.createElement('section');
  section.className = 'testimonials';
  section.innerHTML = `
    <div class="section-head">
      <p class="eyebrow"></p>
      <h2 class="serif"></h2>
    </div>
    <div class="testimonial-card">
      <p class="quote serif"></p>
      <p class="attribution"></p>
      <span class="placeholder-flag"></span>
    </div>
  `;

  const eyebrowEl = section.querySelector('.eyebrow');
  const titleEl = section.querySelector('h2');
  const quoteEl = section.querySelector('.quote');
  const attrEl = section.querySelector('.attribution');
  const flagEl = section.querySelector('.placeholder-flag');

  function render(lang) {
    const t = site.testimonials[lang];
    eyebrowEl.textContent = t.eyebrow;
    titleEl.textContent = t.title;
    quoteEl.textContent = t.quote;
    attrEl.textContent = `— ${t.attribution}`;
    flagEl.textContent = t.note;
  }

  onLangChange(render);
  render(getLang());
  return section;
}
