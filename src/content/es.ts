import type { Copy } from './types';
import { FERRY_CODE, LINKS, YEARS } from '../data/site';

export const es: Copy = {
  meta: {
    title: 'Steeve Luis Angel Torres Agustin — Ingeniero de Software Senior Full-Stack',
    description:
      'Ingeniero senior full-stack, más de 6 años construyendo SaaS en producción de punta a punta: datos, integraciones y sistemas que siguen rápidos bajo carga — Elixir/Phoenix, PostgreSQL, React y React Native.',
    ogTitle: 'Steeve Luis Angel Torres Agustin — Ingeniero de Software Senior Full-Stack',
    ogDescription:
      'Construyo las partes complicadas — datos, integraciones, pagos y sistemas que siguen rápidos bajo carga — y las pantallas que van encima. Abierto a remoto (zonas horarias de EE. UU.).',
    ogImageAlt:
      'Steeve Luis Angel Torres Agustin — ingeniero de software senior full-stack. Datos, integraciones y sistemas que siguen rápidos bajo carga. Abierto a puestos remotos en zonas horarias de EE. UU.',
    twitterTitle: 'Steeve Luis Angel Torres Agustin — Ingeniero de Software Senior Full-Stack',
    twitterDescription:
      'Datos, integraciones, pagos y sistemas que siguen rápidos bajo carga — Elixir/Phoenix + React. Abierto a remoto (zonas horarias de EE. UU.).',
  },

  skip: 'Saltar al contenido',
  railRole: 'Ingeniero de Software Senior Full-Stack',
  themeToLight: 'Claro',
  themeToDark: 'Oscuro',
  themeAria: 'Cambiar el tema de color',
  langAria: 'Idioma',
  navAria: 'Secciones',
  paletteLabel: 'Paleta',
  nav: [
    { label: 'Dominios', href: '#domains' },
    { label: 'Trabajo', href: '#work' },
    { label: 'Open source', href: '#open-source' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ],

  availability: 'Disponible · remoto, zonas horarias de EE. UU.',
  h1a: 'Construyo las partes complicadas — datos, integraciones y sistemas que siguen rápidos bajo carga —',
  h1b: 'y las pantallas que van encima.',
  bio1: 'Hola, soy Steeve. Los últimos seis años los he pasado construyendo SaaS en producción de punta a punta, sobre todo con Elixir y Phoenix, con PostgreSQL debajo. Lo que disfruto es el medio desordenado: sincronizar decenas de sistemas de terceros que nunca coinciden entre sí, mover dinero de forma confiable, y hacer que una búsqueda que tardaba medio minuto responda en una fracción de segundo.',
  bio2: 'También me muevo con soltura en el front end — React, Next.js y React Native — así que puedo llevar una funcionalidad del esquema a la pantalla en vez de entregarla a medias. Trabajo con pruebas primero, y buena parte de mi semana se va en revisar código y ayudar a otros desarrolladores a desatorarse.',
  bio3: 'Prefiero construir, probar y pivotear antes que casarme con una sola idea. Le pregunto su opinión a todo el equipo y recibo feedback de cualquiera — trabajar con gente que ve el problema distinto es buena parte de cómo he aprendido a construir productos.',
  facts: [
    { k: 'Puesto', v: 'Ingeniero de Software Senior Full-Stack' },
    { k: 'Fortaleza', v: 'Datos complejos, integraciones y escala — con un front end sólido' },
    { k: 'Stack principal', v: 'Elixir · Phoenix · PostgreSQL · React / Next.js / React Native' },
    { k: 'Ubicación', v: 'Playa del Carmen, México — abierto a remoto (zonas horarias de EE. UU.)' },
  ],
  ctaWork: 'Ver el trabajo ↓',
  ctaCV: 'Descargar CV',

  domainsLabel: 'Dominios',
  domainsH: 'Las partes de un producto que he tenido a mi cargo.',
  domains: [
    { k: 'Pagos', v: 'Pagos de reservaciones y checkout, construidos de punta a punta como único desarrollador.' },
    { k: 'Reservaciones', v: 'Los flujos de reserva y las reglas que los rodean, de la disponibilidad a la confirmación.' },
    {
      k: 'Inventario',
      v: 'Un motor de inventario centralizado en tiempo real, alimentado por muchos sistemas externos que rara vez coinciden.',
    },
    {
      k: 'Preprocesamiento en segundo plano',
      v: 'Colas y jobs que absorben las ráfagas, respetan los rate limits externos y mantienen tranquila la base de datos.',
    },
    {
      k: 'Canales de distribución',
      v: 'Una API pública de GraphQL para plataformas socias, más las apps web y de React Native encima.',
    },
  ],

  workLabel: 'Trabajo seleccionado',
  workH: 'Dos piezas que me gustaría explicarte.',
  searchYear: YEARS.search,
  searchTitle: 'La búsqueda de parques, reconstruida',
  searchKind: 'El problema más difícil que he resuelto',
  searchP1: 'La búsqueda era simple y muy lenta — de 16 a 30 segundos — porque iba a pedir precios a todas las integraciones mientras el usuario esperaba.',
  searchP2: 'Construí una forma de obtener los precios de todos los parques en las distintas integraciones, mantenerlos sincronizados y preprocesarlos antes de la consulta: caché en memoria, índices diseñados para las queries que de verdad corremos (y revisar que el planner los estuviera usando), un camino más rápido para procesar precios, y devolver precios por parámetros de búsqueda en vez de por spot o categoría, que resultaba mucho más costoso.',
  searchP3: 'Eso lo dejó en unos 300ms. Todavía quedaba margen, pero el siguiente tramo de mejora habría costado varios días más, así que concluimos que ya no era necesario. Saber dónde parar también es parte del trabajo.',
  barLabel: 'Tiempo de respuesta, antes → después',
  latency: [
    { label: '16–30s', width: '100%', color: 'var(--ink-3)', opacity: 0.45 },
    { label: '~300ms', width: '6%', color: 'var(--accent)', opacity: 1 },
  ],
  feTitle: 'En el front end',
  feKind: 'Publicado y en línea',
  frontend: [
    {
      year: YEARS.fleetSync,
      name: 'FleetSync',
      stack: 'Next.js · React · Radix UI · Tailwind · TanStack Query · DocuSign',
      body: 'App de administración de flotas: flotas, vehículos e inventario. Contribuí al front end del sistema de gestión y apoyé a construirlo.',
      links: [{ label: 'fleet-sync.co', href: LINKS.fleetSync }],
    },
    {
      year: YEARS.s2nMobile,
      name: 'Spot2Nite mobile',
      stack: 'React Native',
      body: 'La app de reservación de resorts para RV en iOS. Desarrollé las pantallas principales.',
      links: [
        { label: 'App Store', href: LINKS.s2nApp },
        { label: 'spot2nite.com', href: LINKS.s2nSite },
      ],
    },
  ],

  osLabel: 'Open source',
  osH: 'Publicado, instalable y corriendo en producción.',
  osIntro: 'No tienes que creerme: está en Hex, así que puedes instalarlo en un proyecto y verlo funcionar.',
  ferryYear: YEARS.ferry,
  ferryKind: 'Librería de Elixir · Hex.pm',
  ferryP1: 'La plataforma en la que trabajo recibe cientos de miles de solicitudes de actualización de inventario desde distintas integraciones. Guardarlas y preprocesarlas de la forma obvia — una escritura a la base de datos o un job de Oban por solicitud — se comía las conexiones, y en las horas de actualización tiraba el sistema.',
  ferryP2: 'Ferry se pone delante de eso. Las solicitudes se absorben en memoria y se consumen una por una, así que cinco actualizaciones que llegan en el mismo instante gastan una conexión en lugar de cinco, con trazabilidad de todo lo que entra. Para las integraciones que no envían notificaciones ARI lo usamos para escribir los precios preprocesados de forma más suave, y la base de datos responde de inmediato porque hay mucha menos concurrencia.',
  ferryP3: 'También mueve correos, eventos de herramientas de trackeo y actualizaciones de contenido — donde sea que necesite bajar la concurrencia para no pasarnos de los rate limits de servicios externos.',
  ferryFeatures: [
    { k: 'batching', v: 'Tamaño y timeout de lote configurables, para que las ráfagas se conviertan en menos llamadas hacia abajo.' },
    { k: 'dead-letter', v: 'Las operaciones fallidas caen en una cola de mensajes muertos en vez de desaparecer.' },
    { k: 'telemetry', v: 'Instrumentado con :telemetry, así el comportamiento de la cola es observable en producción.' },
    { k: 'back-pressure', v: 'A los productores se les frena en la frontera en lugar de dejar crecer la cola sin límite.' },
    { k: 'supervisión', v: 'Cada instancia corre su propio subárbol de supervisión — dominios de falla aislados.' },
  ],
  ferryCode: FERRY_CODE,
  ferryCodeLabel: 'Uso',
  ferryLinks: [
    { label: 'Código', href: LINKS.ferryGithub },
    { label: 'hex.pm/packages/ferry', href: LINKS.ferryHex },
  ],

  expLabel: 'Experiencia',
  expH: 'Seis años, tres empresas.',
  colPeriod: 'Periodo',
  colRole: 'Puesto',
  colDid: 'Qué hice',
  experience: [
    {
      period: 'Jun 2021 — Actual',
      meta: 'Remoto · empresa de EE. UU.',
      company: 'Spot2Nite',
      roles: ['Ingeniero Senior Full-Stack'],
      summary: 'Principal contribuidor de backend en una plataforma de reservación y administración de resorts para RV (umbrella de Elixir/Phoenix). Definí la arquitectura en backend, web y móvil; construí más de 15 integraciones de PMS/OTA y de pagos, un motor de inventario centralizado en tiempo real, el sistema de pagos y checkout de reservaciones (como único desarrollador) y una API pública de GraphQL para plataformas socias. Lideré un equipo pequeño, hacía code reviews y, por iniciativa propia, asumí asesorar a otros desarrolladores y equipos sobre cómo resolver problemas. También desarrollé las pantallas principales de la app móvil.',
      stack: 'Elixir · Phoenix · PostgreSQL · Absinthe · Oban · React Native',
    },
    {
      period: 'Sep 2019 — Jun 2021',
      meta: 'Clientes de agencia',
      company: 'Foxlabs',
      roles: ['Desarrollador Full-Stack'],
      summary: 'Apps web y móviles e integraciones para clientes de agencia (incluida una plataforma de reservaciones y membresías para un club); microservicios con NestJS + WooCommerce y una API de correos en Node/TypeScript.',
      stack: 'NestJS · Node.js · TypeScript · React · WooCommerce',
    },
    {
      period: '2018 — 2019',
      meta: 'Interno',
      company: 'Telweb',
      roles: ['Desarrollador Web'],
      summary: 'Aplicaciones internas de negocio con PHP/Laravel y Vue.js.',
      stack: 'PHP · Laravel · Vue.js',
    },
  ],

  stackLabel: 'Stack',
  stackH: 'Lo que uso.',
  skills: [
    {
      label: 'Backend',
      items: 'Elixir, Phoenix, Absinthe (GraphQL), Ecto, Oban, OTP, PostgreSQL, NestJS, Node.js/Express, APIs REST y OTA/XML',
    },
    { label: 'Frontend', items: 'React, Next.js, React Native, Vue.js, Angular (básico), Tailwind CSS, Radix UI' },
    { label: 'Datos e infra', items: 'Tuning de PostgreSQL, Docker, Docker Compose, CI/CD, despliegue en VPS' },
    {
      label: 'Prácticas',
      items: 'Arquitectura de sistemas, diseño de APIs, TDD (ExUnit), migraciones de datos, desarrollo asistido por IA (Claude Code, Engram MCP)',
    },
    { label: 'Idiomas', items: 'Español — nativo · Inglés — lectura y escritura profesional, hablado limitado' },
  ],

  contactLabel: 'Contacto',
  contactH: 'Abierto a remoto (zonas horarias de EE. UU.).',
  contactP: 'Si este es el tipo de trabajo que necesita tu equipo, escríbeme — el correo es la vía más rápida.',
  cvLink: 'CV (PDF) ↓',
  footer: 'Playa del Carmen, México · 2026',
};
