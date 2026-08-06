/** Shape shared by every language copy object. */
export interface Copy {
  /* --- head ---------------------------------------------------- */
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
  };

  /* --- rail ---------------------------------------------------- */
  skip: string;
  railRole: string;
  themeToLight: string;
  themeToDark: string;
  themeAria: string;
  langAria: string;
  navAria: string;
  paletteLabel: string;
  nav: { label: string; href: string }[];

  /* --- header -------------------------------------------------- */
  availability: string;
  h1a: string;
  h1b: string;
  bio1: string;
  bio2: string;
  bio3: string;
  facts: { k: string; v: string }[];
  ctaWork: string;
  ctaCV: string;

  /* --- domains ------------------------------------------------- */
  domainsLabel: string;
  domainsH: string;
  domains: { k: string; v: string }[];

  /* --- work ---------------------------------------------------- */
  workLabel: string;
  workH: string;
  searchYear: string;
  searchTitle: string;
  searchKind: string;
  searchP1: string;
  searchP2: string;
  searchP3: string;
  barLabel: string;
  latency: { label: string; width: string; color: string; opacity: number }[];
  feTitle: string;
  feKind: string;
  frontend: {
    year: string;
    name: string;
    stack: string;
    body: string;
    links: { label: string; href: string }[];
  }[];

  /* --- open source --------------------------------------------- */
  osLabel: string;
  osH: string;
  osIntro: string;
  ferryYear: string;
  ferryKind: string;
  ferryP1: string;
  ferryP2: string;
  ferryP3: string;
  ferryFeatures: { k: string; v: string }[];
  ferryCode: string;
  ferryCodeLabel: string;
  ferryLinks: { label: string; href: string }[];

  /* --- experience ---------------------------------------------- */
  expLabel: string;
  expH: string;
  colPeriod: string;
  colRole: string;
  colDid: string;
  experience: {
    period: string;
    meta: string;
    company: string;
    /** one entry per title — add a line for a promotion, newest first */
    roles: string[];
    summary: string;
    stack: string;
  }[];

  /* --- stack --------------------------------------------------- */
  stackLabel: string;
  stackH: string;
  skills: { label: string; items: string }[];

  /* --- contact ------------------------------------------------- */
  contactLabel: string;
  contactH: string;
  contactP: string;
  cvLink: string;
  footer: string;
}
