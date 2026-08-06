/* ==================================================================
   Site-level constants: URLs, assets, palettes and the Ferry snippet.
   Language-independent values live here; all prose lives in src/content.
   ================================================================== */

export const SITE_URL = 'https://steeve.dev';

export type Lang = 'en' | 'es';

/** One CV per language; both live at the site root. */
export const CV: Record<Lang, string> = {
  en: '/CV_Steeve_Torres_EN.pdf',
  es: '/CV_Steeve_Torres_ES.pdf',
};

/** Canonical URL per language route. */
export const CANONICAL: Record<Lang, string> = {
  en: `${SITE_URL}/`,
  es: `${SITE_URL}/es/`,
};

export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_MX',
};

export const LANGUAGES: { code: Lang; label: string; href: string }[] = [
  { code: 'en', label: 'EN', href: '/' },
  { code: 'es', label: 'ES', href: '/es/' },
];

export const LINKS = {
  github: 'https://github.com/iamsteeve',
  githubLabel: 'github.com/iamsteeve',
  linkedin: 'https://linkedin.com/in/iamsteeve',
  linkedinLabel: 'linkedin.com/in/iamsteeve',
  email: 'iamsteeve@icloud.com',
  ferryGithub: 'https://github.com/iamsteeve/ferry',
  ferryHex: 'https://hex.pm/packages/ferry',
  fleetSync: 'https://fleet-sync.co/',
  s2nApp: 'https://apps.apple.com/us/app/spot2nite/id1498965066',
  s2nSite: 'https://www.spot2nite.com/',
} as const;

/** Ferry usage example, shown in the Open source section. */
export const FERRY_CODE = `defmodule MyApp.ApiFerry do
  use Ferry,
    resolver: &MyApp.ApiResolver.resolve/1,
    batch_size: 25,
    flush_interval: :timer.seconds(5),
    max_queue_size: 5_000
end

# application.ex — each instance gets its own supervision subtree
children = [MyApp.ApiFerry]
Supervisor.start_link(children, strategy: :one_for_one)

# push an operation, then track it
{:ok, id} = Ferry.push(MyApp.ApiFerry, %{url: "/users", body: data})

{:ok, %Ferry.Operation{status: :completed, result: resp}} =
  Ferry.status(MyApp.ApiFerry, id)`;

/** Years shown next to each piece. */
export const YEARS = {
  search: '2021–26', // window at Spot2Nite
  ferry: '2026',
  fleetSync: '2025–26', // since FleetSync was founded, Jun 2025
  s2nMobile: '2021–26',
} as const;

/** Palettes offered in the discreet Palette control. Each overrides --accent. */
export const PALETTES: { name: string; dark: string; light: string }[] = [
  { name: 'Teal', dark: '#2DE3C2', light: '#0C7666' },
  { name: 'Signal', dark: '#4DA8FF', light: '#1D4ED8' },
  { name: 'Brass', dark: '#C8A96A', light: '#8A6A1F' },
  { name: 'Mono', dark: '#E8EEF6', light: '#111A28' },
];
