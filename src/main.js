import './style.css';
import { mountPetals } from './petals.js';
import { renderHero } from './sections/hero.js';
import { renderIntro } from './sections/intro.js';
import { renderTours } from './sections/tours.js';
import { renderWhyUs } from './sections/why-us.js';
import { renderTestimonials } from './sections/testimonials.js';
import { renderCtaBanner } from './sections/cta-banner.js';
import { renderFooter } from './sections/footer.js';

const app = document.getElementById('app');
app.appendChild(renderHero());
app.appendChild(renderIntro());
app.appendChild(renderTours());
app.appendChild(renderWhyUs());
app.appendChild(renderTestimonials());
app.appendChild(renderCtaBanner());
app.appendChild(renderFooter());

mountPetals();
