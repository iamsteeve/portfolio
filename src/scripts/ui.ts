/* ==================================================================
   Client behaviour: theme toggle, palette, reveal-on-scroll, active nav.
   Everything here is progressive enhancement — with this script blocked
   the page still renders in full. No storage APIs are used anywhere.
   ================================================================== */

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isLight = () => root.getAttribute('data-theme') === 'light';

/* --- theme and palette --------------------------------------------- */

const themeToggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const paletteToggle = document.querySelector<HTMLButtonElement>('[data-palette-toggle]');
const paletteList = document.querySelector<HTMLElement>('[data-palette-list]');
const paletteButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-palette-item]'));

/** null means "use the theme's default accent". Session-only, never stored. */
let paletteIndex: number | null = null;
let themingTimer: number | undefined;

/** Crossfade colors for half a second whenever theme or palette changes. */
function flashTransition(): void {
  if (reduced) return;
  root.setAttribute('data-theming', '');
  window.clearTimeout(themingTimer);
  themingTimer = window.setTimeout(() => root.removeAttribute('data-theming'), 560);
}

function applyAccent(): void {
  const light = isLight();
  const active = paletteIndex === null ? undefined : paletteButtons[paletteIndex];
  const accent = active && (light ? active.dataset.light : active.dataset.dark);

  if (accent) root.style.setProperty('--accent', accent);
  else root.style.removeProperty('--accent');

  // keep contrast on the accent button label when the palette is near-white
  root.style.setProperty('--accent-ink', light ? '#FFFFFF' : '#06211C');
}

themeToggle?.addEventListener('click', () => {
  if (isLight()) root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'light');
  applyAccent();
  flashTransition();
});

paletteToggle?.addEventListener('click', () => {
  const open = paletteToggle.getAttribute('aria-expanded') === 'true';
  paletteToggle.setAttribute('aria-expanded', String(!open));
  paletteList?.toggleAttribute('hidden', open);
});

paletteButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    paletteIndex = index;
    paletteButtons.forEach((other, i) => other.setAttribute('aria-pressed', String(i === index)));
    applyAccent();
    flashTransition();
  });
});

/* --- reveal on scroll ---------------------------------------------- */

/**
 * Content ships visible. The hidden state is applied here and only when the
 * document is genuinely painting, so a frozen timeline can never blank the
 * page. Several independent fail-safes bring elements back.
 */
function wireReveals(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!elements.length) return;

  const show = (el: HTMLElement) => el.setAttribute('data-reveal', 'in');

  // never hide content unless we know the page is actually painting
  if (reduced || document.visibilityState !== 'visible') return;
  elements.forEach((el) => el.setAttribute('data-reveal', 'out'));

  const showVisible = () => {
    elements.forEach((el) => {
      if (el.getAttribute('data-reveal') === 'in') return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.96) show(el);
    });
  };
  showVisible();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  elements.forEach((el) => observer.observe(el));

  // fail-safes: content must never stay hidden if the observer never fires
  window.addEventListener('scroll', showVisible, { passive: true });
  document.addEventListener('visibilitychange', showVisible);
  window.setTimeout(() => elements.forEach(show), 700);
}

/* --- active nav ----------------------------------------------------- */

function wireNav(): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href') ?? ''))
    .filter((section): section is Element => Boolean(section));
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.setAttribute('data-active', String(link.getAttribute('href') === `#${entry.target.id}`)),
        );
      });
    },
    { rootMargin: '-30% 0px -60% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}

// NOT inside requestAnimationFrame — rAF never fires in a hidden document
wireReveals();
wireNav();
