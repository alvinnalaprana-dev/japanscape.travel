// Tiny shared language state so every section stays in sync when the
// hero's ID/EN toggle is used — no framework, just a subscribe/publish pair.

import { site } from './content/site.js';

let current = site.defaultLang;
const subscribers = new Set();

export function getLang() {
  return current;
}

export function setLang(lang) {
  current = lang;
  document.documentElement.lang = lang;
  subscribers.forEach((fn) => fn(current));
}

export function toggleLang() {
  setLang(current === 'id' ? 'en' : 'id');
}

export function onLangChange(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}
