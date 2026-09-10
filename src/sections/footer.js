import { site } from '../content/site.js';
import { getLang, onLangChange } from '../lang.js';

export function renderFooter() {
  const section = document.createElement('footer');
  section.className = 'site-footer';
  section.id = 'kontak';
  section.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand">
        <span class="wordmark serif">${site.brand.name}</span>
        <p class="footer-tagline"></p>
      </div>
      <div class="footer-col">
        <p class="footer-col-title"></p>
        <nav class="footer-nav"></nav>
      </div>
      <div class="footer-col">
        <p class="footer-col-title"></p>
        <a class="footer-email" href="mailto:zefanyadriel@gmail.com"></a>
        <a class="footer-social" href="https://instagram.com/japanscape.travel" target="_blank" rel="noopener"></a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-credit"></span>
    </div>
  `;

  const taglineEl = section.querySelector('.footer-tagline');
  const navTitleEl = section.querySelectorAll('.footer-col-title')[0];
  const navEl = section.querySelector('.footer-nav');
  const contactTitleEl = section.querySelectorAll('.footer-col-title')[1];
  const emailEl = section.querySelector('.footer-email');
  const socialEl = section.querySelector('.footer-social');
  const creditEl = section.querySelector('.footer-credit');

  function render(lang) {
    const t = site.footer[lang];
    taglineEl.textContent = t.tagline;
    navTitleEl.textContent = t.navTitle;
    contactTitleEl.textContent = t.contactTitle;
    emailEl.textContent = t.email;
    socialEl.textContent = t.social;
    creditEl.textContent = t.credit;
    navEl.innerHTML = site.nav[lang].map((item) => `<span>${item}</span>`).join('');
  }

  onLangChange(render);
  render(getLang());
  return section;
}
