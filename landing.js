(function () {
  var STORAGE_KEY = 'nuvia-lang';

  var translations = {
    es: {
      // Nav
      "nav.howItWorks": "Cómo funciona",
      "nav.features": "Funciones",
      "nav.pricing": "Precios",
      "nav.faq": "Preguntas",
      "nav.login": "Iniciar sesión",
      "nav.startFree": "Empezar gratis",

      // Hero
      "hero.pill": "Sistema Inteligente de Ejecución",
      "hero.line1": "Deja de organizar.",
      "hero.line2": "Empieza a ejecutar.",
      "hero.subtitle": "Nuvia Flow convierte ideas dispersas en acción estructurada — con gestión contextual, priorización dinámica y guía de ejecución con IA.",
      "hero.ctaPrimary": "Empezar gratis",
      "hero.ctaSecondary": "Ver cómo funciona",

      // Problem
      "problem.title": "La mayoría de los founders están ocupados — no son efectivos",
      "problem.subtitle": "¿Te suena?",
      "problem.b1": "Tareas dispersas en cinco apps diferentes",
      "problem.b2": "El cambio constante de contexto mata tu trabajo profundo",
      "problem.b3": "Sin priorización real — solo intuición y ansiedad",
      "problem.b4": "El trabajo estratégico enterrado bajo lo urgente",
      "problem.b5": "Organizas más de lo que ejecutas",
      "problem.beforeTitle": "Tu realidad hoy",
      "problem.beforeDesc": "Decenas de pestañas abiertas. Múltiples apps. Listas que nunca terminas. Cada mañana empieza con \"¿dónde me quedé?\"",
      "problem.afterTitle": "Tu vida con Nuvia Flow",
      "problem.afterDesc": "Un solo sistema. Prioridades claras. Lo abres y sabes exactamente qué hacer.",

      // Shift
      "shift.title": "Tu trabajo no necesita más organización. Necesita inteligencia.",
      "shift.subtitle": "Las herramientas tradicionales almacenan tareas. Nuvia Flow entiende el contexto, evalúa impacto y te dice qué importa.",
      "shift.colOld": "Herramientas tradicionales",
      "shift.colNew": "Nuvia Flow",
      "shift.r1a": "Listas estáticas",
      "shift.r1b": "Tareas con contexto",
      "shift.r2a": "Priorización manual",
      "shift.r2b": "Priorización asistida por IA",
      "shift.r3a": "Más organización",
      "shift.r3b": "Claridad de ejecución",
      "shift.r4a": "Vistas y dashboards infinitos",
      "shift.r4b": "Un siguiente paso claro",

      // How it works
      "how.title": "Cómo funciona",
      "how.s1Title": "Captura todo",
      "how.s1Desc": "Añade con contexto inteligente — áreas, proyectos, tags. Las ideas entran sin romper tu flujo.",
      "how.s2Title": "Estructura automática",
      "how.s2Desc": "Las tareas se organizan en áreas y proyectos con contexto completo. Sin ordenar manualmente.",
      "how.s3Title": "Ejecuta con inteligencia",
      "how.s3Desc": "El modo foco muestra exactamente qué hacer ahora — basado en prioridad, contexto e impacto.",

      // Features
      "feat.title": "Todo lo que necesitas para ejecutar",
      "feat.subtitle": "Seis capacidades que transforman cómo trabajas.",
      "feat.f1t": "Priorización con IA",
      "feat.f1d": "Sabe qué mueve la aguja. Deja de adivinar qué tarea importa más.",
      "feat.f2t": "Modo foco",
      "feat.f2d": "Un camino de ejecución claro. Sin ruido, sin distracciones, sin fatiga de decisión.",
      "feat.f3t": "Estructura contextual",
      "feat.f3d": "Tareas conectadas a áreas, proyectos y estrategia. Todo en contexto.",
      "feat.f4t": "Captura rápida",
      "feat.f4d": "Captura ideas en segundos — área, proyecto, prioridad, todo inline. Nunca pierdas un pensamiento.",
      "feat.f5t": "Analytics de ejecución",
      "feat.f5d": "Ve a dónde va tu tiempo y energía. Entiende tus patrones, mejora tu output.",
      "feat.f6t": "Personal + trabajo en un sistema",
      "feat.f6d": "Sin fragmentación de herramientas. Vida y trabajo en una sola capa de ejecución.",

      // Audience
      "aud.title": "Diseñado para builders",
      "aud.forTitle": "Esto es para ti si...",
      "aud.for1": "Eres un founder construyendo algo real",
      "aud.for2": "Eres indie hacker manejando múltiples proyectos",
      "aud.for3": "Lideras un equipo pequeño remoto (1–20 personas)",
      "aud.for4": "Eres un operador que piensa en sistemas",
      "aud.for5": "Ejecutas — no solo planeas",
      "aud.notTitle": "No es para ti si...",
      "aud.not1": "Quieres proceso enterprise pesado y aprobaciones",
      "aud.not2": "Solo necesitas un checklist simple",
      "aud.not3": "Prefieres configurar herramientas que hacer el trabajo",

      // Social proof
      "social.title": "Creado por un founder, para founders",
      "social.q1": "\"Por fin, una herramienta que piensa como yo. No más organización — más ejecución.\"",
      "social.a1": "Usuario beta — Founder SaaS",
      "social.q2": "\"Dejé de usar tres apps la semana que empecé con Nuvia Flow.\"",
      "social.a2": "Usuario beta — Indie hacker",
      "social.q3": "\"La priorización con IA me ahorró horas de '¿en qué debería trabajar?' cada semana.\"",
      "social.a3": "Usuario beta — Product builder",

      // FAQ
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿No es otra app de tareas más?",
      "faq.a1": "Las apps de tareas almacenan tu trabajo. Nuvia Flow impulsa la ejecución. Te dice qué hacer basándose en contexto y prioridad — no solo dónde ponerlo.",
      "faq.q2": "¿Por qué no Notion?",
      "faq.a2": "Notion es un workspace para todo. Nuvia Flow es un sistema de ejecución para lo que importa. Notion almacena; Nuvia Flow decide.",
      "faq.q3": "¿Por qué no ClickUp?",
      "faq.a3": "ClickUp te da más vistas y más configuración. Nuvia Flow te da un siguiente paso claro. Menos setup, más ejecución.",

      // Pricing
      "price.title": "Precios simples y transparentes",
      "price.subtitle": "Empieza a construir momentum hoy.",
      "price.sPrice": "$15/mes",
      "price.sDesc": "Para individuos que empiezan",
      "price.sF1": "Tareas ilimitadas",
      "price.sF2": "Áreas y proyectos",
      "price.sF3": "Captura rápida",
      "price.sCta": "Unirse a la lista",
      "price.pBadge": "Más popular",
      "price.pPrice": "$25/mes",
      "price.pDesc": "Para builders serios",
      "price.pF1": "Todo en Starter",
      "price.pF2": "Priorización con IA",
      "price.pF3": "Modo foco",
      "price.pF4": "Analytics de ejecución",
      "price.pCta": "Unirse a la lista",
      "price.tPrice": "$49/mes",
      "price.tDesc": "Para equipos pequeños hasta 20",
      "price.tF1": "Todo en Pro",
      "price.tF2": "Workspace de equipo",
      "price.tF3": "Proyectos compartidos",
      "price.tF4": "Soporte prioritario",
      "price.tCta": "Unirse a la lista",
      "price.trust": "Precios de lanzamiento — Únete a la lista hoy. Sin tarjeta de crédito.",

      // Final CTA
      "cta.title": "La ejecución es una ventaja competitiva.",
      "cta.subtitle": "Deja de ahogarte en tareas. Construye con claridad.",
      "cta.button": "Empezar gratis",

      // Footer
      "footer.tagline": "Nuvia Flow — El sistema de ejecución para builders ambiciosos.",

      // Meta
      "meta.title": "Nuvia Flow — Deja de organizar. Empieza a ejecutar.",
      "meta.description": "Sistema de ejecución con IA para founders. Gestión contextual, priorización inteligente y modo foco — todo en un solo lugar."
    },

    en: {
      // Nav
      "nav.howItWorks": "How It Works",
      "nav.features": "Features",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.login": "Sign in",
      "nav.startFree": "Start Free",

      // Hero
      "hero.pill": "Intelligent Execution System",
      "hero.line1": "Stop organizing.",
      "hero.line2": "Start executing.",
      "hero.subtitle": "Nuvia Flow turns scattered ideas into structured action — with contextual task management, dynamic prioritization, and AI-powered execution guidance.",
      "hero.ctaPrimary": "Start Free",
      "hero.ctaSecondary": "See How It Works",

      // Problem
      "problem.title": "Most Founders Are Busy — Not Effective",
      "problem.subtitle": "Sound familiar?",
      "problem.b1": "Tasks scattered across five different apps",
      "problem.b2": "Constant context switching kills your deep work",
      "problem.b3": "No real prioritization — just gut feeling and anxiety",
      "problem.b4": "Strategic work buried under urgent busywork",
      "problem.b5": "You organize more than you execute",
      "problem.beforeTitle": "Your reality today",
      "problem.beforeDesc": "Dozens of open tabs. Multiple apps. Long lists you never finish. Every morning starts with \"Where was I?\"",
      "problem.afterTitle": "Life with Nuvia Flow",
      "problem.afterDesc": "One system. Clear priorities. You open it and know exactly what to do next.",

      // Shift
      "shift.title": "Your Work Doesn't Need More Organization. It Needs Intelligence.",
      "shift.subtitle": "Traditional tools store tasks. Nuvia Flow understands context, evaluates impact, and tells you what matters.",
      "shift.colOld": "Traditional Tools",
      "shift.colNew": "Nuvia Flow",
      "shift.r1a": "Static task lists",
      "shift.r1b": "Context-aware tasks",
      "shift.r2a": "Manual prioritization",
      "shift.r2b": "AI-assisted prioritization",
      "shift.r3a": "More organization",
      "shift.r3b": "Execution clarity",
      "shift.r4a": "Endless views and dashboards",
      "shift.r4b": "One clear next move",

      // How it works
      "how.title": "How It Works",
      "how.s1Title": "Capture Everything",
      "how.s1Desc": "Quick-add with smart context — areas, projects, tags. Ideas flow in without breaking your momentum.",
      "how.s2Title": "Structure Automatically",
      "how.s2Desc": "Tasks organize into areas and projects with full contextual awareness. No manual sorting required.",
      "how.s3Title": "Execute Intelligently",
      "how.s3Desc": "Focus mode shows exactly what to work on now — based on priority, context, and strategic impact.",

      // Features
      "feat.title": "Everything You Need to Execute",
      "feat.subtitle": "Six capabilities that transform how you work.",
      "feat.f1t": "AI-Assisted Prioritization",
      "feat.f1d": "Know what moves the needle. Stop guessing which task matters most.",
      "feat.f2t": "Focus Mode",
      "feat.f2d": "One clear execution path. No noise, no distractions, no decision fatigue.",
      "feat.f3t": "Context-Aware Structure",
      "feat.f3d": "Tasks connected to areas, projects, and strategy. Everything in context.",
      "feat.f4t": "Quick Capture Engine",
      "feat.f4d": "Dump ideas in seconds — area, project, priority, all inline. Never lose a thought.",
      "feat.f5t": "Execution Analytics",
      "feat.f5d": "See where your time and energy go. Understand your patterns, improve your output.",
      "feat.f6t": "Personal + Business in One System",
      "feat.f6d": "No more tool fragmentation. Life and work in one unified execution layer.",

      // Audience
      "aud.title": "Built for Builders",
      "aud.forTitle": "This is for you if...",
      "aud.for1": "You're a solo founder building something real",
      "aud.for2": "You're an indie hacker juggling multiple projects",
      "aud.for3": "You lead a small remote team (1–20 people)",
      "aud.for4": "You're an operator who thinks in systems",
      "aud.for5": "You ship — you don't just plan",
      "aud.notTitle": "Not for you if...",
      "aud.not1": "You want heavy enterprise process and approvals",
      "aud.not2": "You just need a simple checklist",
      "aud.not3": "You'd rather configure tools than do the work",

      // Social proof
      "social.title": "Built by a Founder, for Founders",
      "social.q1": "\"Finally, a tool that thinks the way I do. Not more organization — more execution.\"",
      "social.a1": "Beta user — SaaS founder",
      "social.q2": "\"I stopped using three apps the week I started with Nuvia Flow.\"",
      "social.a2": "Beta user — Indie hacker",
      "social.q3": "\"The AI prioritization alone saved me hours of 'what should I work on?' every week.\"",
      "social.a3": "Beta user — Product builder",

      // FAQ
      "faq.title": "Common Questions",
      "faq.q1": "Isn't this just another task app?",
      "faq.a1": "Task apps store your work. Nuvia Flow drives execution. It tells you what to do next based on context and priority — not just where to put it.",
      "faq.q2": "Why not Notion?",
      "faq.a2": "Notion is a workspace for everything. Nuvia Flow is an execution system for what matters. Notion stores; Nuvia Flow decides.",
      "faq.q3": "Why not ClickUp?",
      "faq.a3": "ClickUp gives you more views and more configuration. Nuvia Flow gives you one clear next move. Less setup, more shipping.",

      // Pricing
      "price.title": "Simple, Transparent Pricing",
      "price.subtitle": "Start building momentum today.",
      "price.sPrice": "$15/mo",
      "price.sDesc": "For individuals getting started",
      "price.sF1": "Unlimited tasks",
      "price.sF2": "Areas & projects",
      "price.sF3": "Quick capture",
      "price.sCta": "Join Waitlist",
      "price.pBadge": "Most Popular",
      "price.pPrice": "$25/mo",
      "price.pDesc": "For serious builders",
      "price.pF1": "Everything in Starter",
      "price.pF2": "AI prioritization",
      "price.pF3": "Focus mode",
      "price.pF4": "Execution analytics",
      "price.pCta": "Join Waitlist",
      "price.tPrice": "$49/mo",
      "price.tDesc": "For small teams up to 20",
      "price.tF1": "Everything in Pro",
      "price.tF2": "Team workspace",
      "price.tF3": "Shared projects",
      "price.tF4": "Priority support",
      "price.tCta": "Join Waitlist",
      "price.trust": "Launch pricing — Join the waitlist today. No credit card required.",

      // Final CTA
      "cta.title": "Execution Is a Competitive Advantage.",
      "cta.subtitle": "Stop drowning in tasks. Start building with clarity.",
      "cta.button": "Start Free",

      // Footer
      "footer.tagline": "Nuvia Flow — The execution system for ambitious builders.",

      // Meta
      "meta.title": "Nuvia Flow — Stop organizing. Start executing.",
      "meta.description": "AI-powered execution system for founders. Contextual task management, intelligent prioritization, and focus mode — all in one place."
    }
  };

  var titleEl = document.querySelector('title');
  var descEl = document.querySelector('meta[name="description"]');

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
    var nav = navigator.language || navigator.userLanguage || '';
    return nav.startsWith('es') ? 'es' : 'en';
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key] != null) el.textContent = translations[lang][key];
    });

    if (titleEl && translations[lang]['meta.title']) {
      titleEl.textContent = translations[lang]['meta.title'];
    }
    if (descEl && translations[lang]['meta.description']) {
      descEl.setAttribute('content', translations[lang]['meta.description']);
    }

    document.getElementById('lang-es').classList.toggle('ring-2', lang === 'es');
    document.getElementById('lang-es').classList.toggle('ring-blue-400', lang === 'es');
    document.getElementById('lang-en').classList.toggle('ring-2', lang === 'en');
    document.getElementById('lang-en').classList.toggle('ring-blue-400', lang === 'en');
  }

  // Language toggle
  document.getElementById('lang-es').addEventListener('click', function () { setLang('es'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });

  // Mobile menu toggle
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  setLang(getLang());
})();
