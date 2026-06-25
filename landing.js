(function () {
  var STORAGE_KEY = 'nuvia-lang';

  var translations = {
    es: {
      // Nav
      "nav.howItWorks": "Cómo funciona",
      "nav.features": "Funciones",
      "nav.coach": "Nuvia Coach",
      "nav.pricing": "Precios",
      "nav.faq": "Preguntas",
      "nav.login": "Iniciar sesión",
      "nav.startFree": "Empezar gratis",

      // Hero
      "hero.pill": "Coach de ejecución con IA · Telegram + app",
      "hero.line1": "Tu coach de ejecución",
      "hero.line2": "te dice qué hacer hoy.",
      "hero.subtitle": "Captura ideas en segundos. Nuvia elige tu misión del día, te hace standup por Telegram y te empuja hasta cerrarla — con planes de ejecución, foco por área y métricas reales.",
      "hero.ctaPrimary": "Empezar gratis",
      "hero.ctaSecondary": "Ver cómo funciona",
      "hero.mockToday": "Hoy",
      "hero.mockMissionLabel": "La tarea de hoy",
      "hero.mockMissionTask": "Publicar landing v2",
      "hero.mockMissionMeta": "Producto · Lanzamiento",
      "hero.mockMissionBadge": "Today's Mission",
      "hero.mockWatch": "Under Nuvia's Watch",
      "hero.mockWatch1": "Revisar funnel de onboarding",
      "hero.mockWatch2": "Actualizar página de pricing",
      "hero.mockWatch3": "Preparar demo para inversores",
      "hero.mockHint": "Sugerida — aún no es tu misión del coach",

      // Problem
      "problem.title": "La mayoría de los founders están ocupados — no son efectivos",
      "problem.subtitle": "¿Te suena?",
      "problem.b1": "Tareas dispersas en cinco apps diferentes",
      "problem.b2": "El cambio constante de contexto mata tu trabajo profundo",
      "problem.b3": "Sin priorización real — solo intuición y ansiedad",
      "problem.b4": "El trabajo estratégico enterrado bajo lo urgente",
      "problem.b5": "Organizas más de lo que ejecutas",
      "problem.b6": "Sabes qué hacer… pero nadie te empuja a terminarlo",
      "problem.beforeTitle": "Tu realidad hoy",
      "problem.beforeDesc": "Decenas de pestañas abiertas. Múltiples apps. Listas que nunca terminas. Cada mañana empieza con \"¿dónde me quedé?\"",
      "problem.afterTitle": "Tu vida con Nuvia Flow",
      "problem.afterDesc": "Abres Today y ves tu misión. Nuvia te escribe por Telegram. Un solo sistema que te sigue hasta cerrar.",

      // Shift
      "shift.title": "No necesitas otra lista. Necesitas un loop de ejecución.",
      "shift.subtitle": "Las herramientas tradicionales almacenan tareas. Nuvia Flow elige el foco, te acompaña y mide si ejecutaste.",
      "shift.colOld": "Herramientas tradicionales",
      "shift.colNew": "Nuvia Flow",
      "shift.r1a": "Listas estáticas",
      "shift.r1b": "Tareas con contexto por área y proyecto",
      "shift.r2a": "Priorización manual",
      "shift.r2b": "Misión del día + pool Under watch",
      "shift.r3a": "Recordatorios pasivos",
      "shift.r3b": "Coach que pregunta, interpreta y escala",
      "shift.r4a": "50 tareas en \"prioridad alta\"",
      "shift.r4b": "1 misión proactiva · el resto en cola",
      "shift.r5a": "App que olvidas abrir",
      "shift.r5b": "Telegram bidireccional en tu bolsillo",
      "shift.r6a": "Planear sin ejecutar",
      "shift.r6b": "Execution Plan + accountability loop",

      // How it works
      "how.title": "Cómo funciona",
      "how.s1Title": "Captura sin fricción",
      "how.s1Desc": "Voz, Quick Capture o canvas — la IA sugiere área y proyecto mientras escribes.",
      "how.s2Title": "Nuvia elige el foco",
      "how.s2Desc": "Standup matutino y Today's Mission desde tu pool Under watch. Una sola tarea proactiva al día.",
      "how.s3Title": "Ejecuta con seguimiento",
      "how.s3Desc": "Plan por tarea + nudges por Telegram hasta DONE, progreso o bloqueado.",
      "how.loopTitle": "El loop del coach",
      "how.l1t": "Standup matutino",
      "how.l1d": "Recap de ayer + candidatos numerados",
      "how.l2t": "Mission commit",
      "how.l2d": "Confirmas la tarea del día",
      "how.l3t": "Accountability nudges",
      "how.l3d": "Hecho · Progreso · Bloqueado",
      "how.l4t": "Execution Gap",
      "how.l4d": "Radar vs realidad semanal",

      // Features
      "feat.title": "Todo lo que necesitas para ejecutar",
      "feat.subtitle": "Nueve capacidades. Un solo loop de ejecución.",
      "feat.f1t": "Coach en Telegram",
      "feat.f1d": "Standup matutino, nudges inteligentes y respuestas con un tap: hecho, progreso o bloqueado. Un copiloto que no te deja ghostear tus prioridades.",
      "feat.f2t": "La tarea de hoy",
      "feat.f2d": "Una sola misión proactiva al día. El resto queda en cola bajo watch — sin spam, sin parálisis por elección.",
      "feat.f3t": "Under Nuvia's Watch",
      "feat.f3d": "Tu radar de foco con límites Gentle, Balanced o Sergeant. Solo lo que importa entra al pool del coach.",
      "feat.f4t": "Execution Plan",
      "feat.f4d": "Desglosa tareas complejas en fases accionables. Refina con voz o texto hasta que el plan sea ejecutable.",
      "feat.f5t": "Captura inteligente",
      "feat.f5d": "Voz, @área, /proyecto y sugerencias semánticas. Las ideas entran clasificadas, no en el limbo del inbox.",
      "feat.f6t": "Grafos de proyecto",
      "feat.f6d": "Dependencias, mapa visual y contexto por área. Tu trabajo estratégico conectado, no aislado.",
      "feat.f7t": "Rituals y visualizaciones",
      "feat.f7d": "Reflexión por área y tableros de visión. Conecta el día a día con hacia dónde vas.",
      "feat.f8t": "Execution Gap",
      "feat.f8d": "Compromiso vs completado, semana a semana. Ve si tu radar coincide con lo que realmente cierras.",
      "feat.f9t": "Todo en un sistema",
      "feat.f9d": "Un solo sistema para vida y trabajo — en español o inglés, desde el navegador o tu móvil.",

      // Coach section
      "coach.title": "Conoce a Nuvia",
      "coach.subtitle": "Tu coach de ejecución — no un chatbot genérico",
      "coach.p1": "Nuvia recuerda tus áreas, stakeholders y patrones. Adapta el tono a tu estilo — Gentle, Balanced o Sergeant — y respeta tu horario, vacaciones y presupuesto de mensajes.",
      "coach.p2": "Te propone, tú confirmas. Te empuja, tú ejecutas. El loop cierra cuando marcas progreso real — en la app o con un tap en Telegram.",

      // Audience
      "aud.title": "Diseñado para builders",
      "aud.forTitle": "Esto es para ti si...",
      "aud.for1": "Eres un founder construyendo algo real",
      "aud.for2": "Eres indie hacker manejando múltiples proyectos",
      "aud.for3": "Lideras un equipo pequeño remoto",
      "aud.for4": "Eres un operador que piensa en sistemas",
      "aud.for5": "Ejecutas — no solo planeas",
      "aud.for6": "Necesitas accountability real, no otra lista bonita",
      "aud.notTitle": "No es para ti si...",
      "aud.not1": "Quieres proceso enterprise pesado y aprobaciones",
      "aud.not2": "Solo necesitas un checklist simple",
      "aud.not3": "Prefieres configurar herramientas que hacer el trabajo",

      // Social proof
      "social.title": "Hecho por un founder, para founders",
      "social.subtitle": "Un sistema pensado para quien construye en serio — no para llenar listas.",
      "social.quote": "\"No fallamos por falta de ideas. Fallamos porque nadie nos empuja a cerrar la que importa hoy.\"",
      "social.tagline": "Personal Operating System con coach proactivo.",
      "social.built": "Captura, misión del día, Telegram y métricas — en un solo loop de ejecución.",

      // FAQ
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿No es otra app de tareas más?",
      "faq.a1": "Las apps de tareas almacenan tu trabajo. Nuvia Flow impulsa la ejecución: elige la misión, te sigue por Telegram y mide si cerraste. No es dónde poner tareas — es cómo terminarlas.",
      "faq.q2": "¿Por qué no Notion?",
      "faq.a2": "Notion es un workspace para todo. Nuvia Flow es un sistema de ejecución para lo que importa. Notion almacena; Nuvia Flow decide y te empuja.",
      "faq.q3": "¿Por qué no ClickUp?",
      "faq.a3": "ClickUp te da más vistas y más configuración. Nuvia Flow te da una misión del día y un coach que hace follow-up. Menos setup, más cierre.",
      "faq.q4": "¿Necesito Telegram?",
      "faq.a4": "No es obligatorio — la app funciona sola. Pero Telegram es donde el coach cobra vida: standup, nudges y respuestas con un tap. Es la experiencia completa.",
      "faq.q5": "¿En qué se diferencia de Sunsama o Motion?",
      "faq.a5": "Ellos planean tu día. Nuvia hace commit + follow-up: una misión, accountability bidireccional y métricas de ejecución real. Planear es el inicio — cerrar es el objetivo.",
      "faq.q6": "¿La IA decide por mí?",
      "faq.a6": "No. Nuvia sugiere y empuja con contexto. Tú confirmas la misión del día y marcas progreso. Tú ejecutas — el coach te mantiene honesto.",

      // Pricing
      "price.title": "Tres planes. Crece a tu ritmo.",
      "price.subtitle": "Empieza en Free. Sube cuando necesites más IA o el coach completo.",
      "price.freeName": "Free",
      "price.freePrice": "$0",
      "price.freeDesc": "Organiza y prueba Nuvia Flow",
      "price.freeF1": "Tareas y proyectos ilimitados",
      "price.freeF2": "Hasta 3 áreas",
      "price.freeF3": "5 créditos IA al mes",
      "price.freeF4": "Today, captura rápida y estadísticas básicas",
      "price.freeF5": "Canvas e inbox semántico",
      "price.freeCta": "Empezar gratis",
      "price.pBadge": "Más IA",
      "price.premiumName": "Premium",
      "price.premiumPrice": "$10/mes",
      "price.premiumDesc": "Más áreas, más IA, más profundidad",
      "price.pF1": "Áreas ilimitadas",
      "price.pF2": "100 créditos IA al mes",
      "price.pF3": "Execution Plan + captura por voz",
      "price.pF4": "Sugerencias semánticas y canvas IA",
      "price.pF5": "Estadísticas y mapas de proyecto",
      "price.pCta": "Empezar gratis",
      "price.uBadge": "Loop completo",
      "price.unlimitedName": "Ilimitado",
      "price.unlimitedPrice": "$25/mes",
      "price.unlimitedDesc": "IA sin techo, coach en Telegram y todo el loop — sin asteriscos.",
      "price.uF1": "Todo en Premium",
      "price.uF2": "IA ilimitada",
      "price.uF3": "Nuvia Coach en Telegram",
      "price.uF4": "Today's Mission + Under watch",
      "price.uF5": "Execution Gap, rituals y visualizaciones",
      "price.uF6": "Prioridad en roadmap y soporte directo",
      "price.uF7": "Para quien quiere cerrar de verdad — no solo planear",
      "price.uCta": "Empezar gratis",
      "price.trust": "Los créditos IA cubren acciones Pro: planes de ejecución, voz y sugerencias. Hoy acceso completo mientras construimos — sin tarjeta.",

      // Final CTA
      "cta.title": "Deja de planear solo. Empieza a cerrar.",
      "cta.subtitle": "Tu misión de hoy te espera. El coach también.",
      "cta.button": "Empezar gratis",

      // Footer
      "footer.tagline": "Nuvia Flow — El Personal Operating System para founders que ejecutan.",

      // Meta
      "meta.title": "Nuvia Flow — Coach de ejecución con IA para founders",
      "meta.description": "Personal Operating System con coach proactivo en Telegram. Today's Mission, accountability, planes de ejecución y métricas reales — para founders que cierran, no solo planean."
    },

    en: {
      // Nav
      "nav.howItWorks": "How It Works",
      "nav.features": "Features",
      "nav.coach": "Nuvia Coach",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.login": "Sign in",
      "nav.startFree": "Start Free",

      // Hero
      "hero.pill": "AI execution coach · Telegram + app",
      "hero.line1": "Your execution coach",
      "hero.line2": "picks today's mission.",
      "hero.subtitle": "Capture ideas in seconds. Nuvia picks your daily mission, runs morning standup on Telegram, and follows up until you close it — with execution plans, area focus, and real metrics.",
      "hero.ctaPrimary": "Start Free",
      "hero.ctaSecondary": "See How It Works",
      "hero.mockToday": "Today",
      "hero.mockMissionLabel": "Today's Mission",
      "hero.mockMissionTask": "Ship landing page v2",
      "hero.mockMissionMeta": "Product · Launch",
      "hero.mockMissionBadge": "Today's Mission",
      "hero.mockWatch": "Under Nuvia's Watch",
      "hero.mockWatch1": "Review onboarding funnel",
      "hero.mockWatch2": "Update pricing page",
      "hero.mockWatch3": "Prep investor demo",
      "hero.mockHint": "Suggested — not your coach mission yet",

      // Problem
      "problem.title": "Most Founders Are Busy — Not Effective",
      "problem.subtitle": "Sound familiar?",
      "problem.b1": "Tasks scattered across five different apps",
      "problem.b2": "Constant context switching kills your deep work",
      "problem.b3": "No real prioritization — just gut feeling and anxiety",
      "problem.b4": "Strategic work buried under urgent busywork",
      "problem.b5": "You organize more than you execute",
      "problem.b6": "You know what to do — but nothing pushes you to finish",
      "problem.beforeTitle": "Your reality today",
      "problem.beforeDesc": "Dozens of open tabs. Multiple apps. Long lists you never finish. Every morning starts with \"Where was I?\"",
      "problem.afterTitle": "Life with Nuvia Flow",
      "problem.afterDesc": "Open Today and see your mission. Nuvia messages you on Telegram. One system that follows through until you close.",

      // Shift
      "shift.title": "You don't need another list. You need an execution loop.",
      "shift.subtitle": "Traditional tools store tasks. Nuvia Flow picks the focus, follows up, and measures whether you executed.",
      "shift.colOld": "Traditional Tools",
      "shift.colNew": "Nuvia Flow",
      "shift.r1a": "Static task lists",
      "shift.r1b": "Context-aware tasks by area and project",
      "shift.r2a": "Manual prioritization",
      "shift.r2b": "Today's Mission + Under watch pool",
      "shift.r3a": "Passive reminders",
      "shift.r3b": "Coach that asks, interprets, and escalates",
      "shift.r4a": "50 tasks marked \"high priority\"",
      "shift.r4b": "1 proactive mission · rest queued",
      "shift.r5a": "App you forget to open",
      "shift.r5b": "Two-way Telegram in your pocket",
      "shift.r6a": "Planning without executing",
      "shift.r6b": "Execution Plan + accountability loop",

      // How it works
      "how.title": "How It Works",
      "how.s1Title": "Capture without friction",
      "how.s1Desc": "Voice, Quick Capture, or canvas — AI suggests area and project as you type.",
      "how.s2Title": "Nuvia picks the focus",
      "how.s2Desc": "Morning standup and Today's Mission from your Under watch pool. One proactive task per day.",
      "how.s3Title": "Execute with follow-through",
      "how.s3Desc": "Per-task plan + Telegram nudges until DONE, progress, or blocked.",
      "how.loopTitle": "The coach loop",
      "how.l1t": "Morning standup",
      "how.l1d": "Yesterday recap + numbered candidates",
      "how.l2t": "Mission commit",
      "how.l2d": "You confirm today's task",
      "how.l3t": "Accountability nudges",
      "how.l3d": "Done · Progress · Blocked",
      "how.l4t": "Execution Gap",
      "how.l4d": "Watch radar vs weekly reality",

      // Features
      "feat.title": "Everything You Need to Execute",
      "feat.subtitle": "Nine capabilities. One execution loop.",
      "feat.f1t": "Telegram Coach",
      "feat.f1d": "Morning standup, smart nudges, and one-tap replies: done, progress, or blocked. A copilot that won't let you ghost your priorities.",
      "feat.f2t": "Today's Mission",
      "feat.f2d": "One proactive mission per day. Everything else stays queued under watch — no spam, no choice paralysis.",
      "feat.f3t": "Under Nuvia's Watch",
      "feat.f3d": "Your focus radar with Gentle, Balanced, or Sergeant limits. Only what matters enters the coach pool.",
      "feat.f4t": "Execution Plan",
      "feat.f4d": "Break complex tasks into actionable phases. Refine with voice or text until the plan is executable.",
      "feat.f5t": "Smart capture",
      "feat.f5d": "Voice, @area, /project, and semantic suggestions. Ideas land classified — not lost in inbox limbo.",
      "feat.f6t": "Project graphs",
      "feat.f6d": "Dependencies, visual map, and area context. Strategic work connected, not isolated.",
      "feat.f7t": "Rituals & visualizations",
      "feat.f7d": "Area reflection and vision boards. Connect daily work to where you're heading.",
      "feat.f8t": "Execution Gap",
      "feat.f8d": "Commitment vs completed, week over week. See if your radar matches what you actually close.",
      "feat.f9t": "One unified system",
      "feat.f9d": "One system for life and work — in English or Spanish, from your browser or phone.",

      // Coach section
      "coach.title": "Meet Nuvia",
      "coach.subtitle": "Your execution coach — not a generic chatbot",
      "coach.p1": "Nuvia remembers your areas, stakeholders, and patterns. Adapts tone to your style — Gentle, Balanced, or Sergeant — and respects your schedule, vacation mode, and message budget.",
      "coach.p2": "Nuvia proposes, you confirm. Nuvia pushes, you execute. The loop closes when you mark real progress — in the app or with one tap on Telegram.",

      // Audience
      "aud.title": "Built for Builders",
      "aud.forTitle": "This is for you if...",
      "aud.for1": "You're a solo founder building something real",
      "aud.for2": "You're an indie hacker juggling multiple projects",
      "aud.for3": "You lead a small remote team",
      "aud.for4": "You're an operator who thinks in systems",
      "aud.for5": "You ship — you don't just plan",
      "aud.for6": "You need real accountability, not another pretty list",
      "aud.notTitle": "Not for you if...",
      "aud.not1": "You want heavy enterprise process and approvals",
      "aud.not2": "You just need a simple checklist",
      "aud.not3": "You'd rather configure tools than do the work",

      // Social proof
      "social.title": "Built by a founder, for founders",
      "social.subtitle": "A system built for people who ship — not just organize lists.",
      "social.quote": "\"We don't fail from lack of ideas. We fail because nothing pushes us to close what matters today.\"",
      "social.tagline": "Personal Operating System with a proactive coach.",
      "social.built": "Capture, daily mission, Telegram, and metrics — one execution loop.",

      // FAQ
      "faq.title": "Common Questions",
      "faq.q1": "Isn't this just another task app?",
      "faq.a1": "Task apps store your work. Nuvia Flow drives execution: picks the mission, follows up on Telegram, and measures whether you closed. Not where to put tasks — how to finish them.",
      "faq.q2": "Why not Notion?",
      "faq.a2": "Notion is a workspace for everything. Nuvia Flow is an execution system for what matters. Notion stores; Nuvia Flow decides and pushes.",
      "faq.q3": "Why not ClickUp?",
      "faq.a3": "ClickUp gives you more views and more configuration. Nuvia Flow gives you one daily mission and a coach that follows up. Less setup, more closing.",
      "faq.q4": "Do I need Telegram?",
      "faq.a4": "Not required — the app works on its own. But Telegram is where the coach comes alive: standup, nudges, and one-tap replies. That's the full experience.",
      "faq.q5": "How is this different from Sunsama or Motion?",
      "faq.a5": "They plan your day. Nuvia does commit + follow-up: one mission, two-way accountability, and real execution metrics. Planning is the start — closing is the goal.",
      "faq.q6": "Does the AI decide for me?",
      "faq.a6": "No. Nuvia suggests and pushes with context. You confirm today's mission and mark progress. You execute — the coach keeps you honest.",

      // Pricing
      "price.title": "Three plans. Grow at your pace.",
      "price.subtitle": "Start on Free. Upgrade when you need more AI or the full coach.",
      "price.freeName": "Free",
      "price.freePrice": "$0",
      "price.freeDesc": "Organize and try Nuvia Flow",
      "price.freeF1": "Unlimited tasks & projects",
      "price.freeF2": "Up to 3 areas",
      "price.freeF3": "5 AI credits per month",
      "price.freeF4": "Today, quick capture & basic stats",
      "price.freeF5": "Canvas & semantic inbox",
      "price.freeCta": "Start Free",
      "price.pBadge": "More AI",
      "price.premiumName": "Premium",
      "price.premiumPrice": "$10/mo",
      "price.premiumDesc": "More areas, more AI, more depth",
      "price.pF1": "Unlimited areas",
      "price.pF2": "100 AI credits per month",
      "price.pF3": "Execution Plan + voice capture",
      "price.pF4": "Semantic suggestions & AI canvas",
      "price.pF5": "Statistics & project maps",
      "price.pCta": "Start Free",
      "price.uBadge": "Full loop",
      "price.unlimitedName": "Unlimited",
      "price.unlimitedPrice": "$25/mo",
      "price.unlimitedDesc": "Uncapped AI, Telegram coach, and the full loop — no fine print.",
      "price.uF1": "Everything in Premium",
      "price.uF2": "Unlimited AI",
      "price.uF3": "Nuvia Coach on Telegram",
      "price.uF4": "Today's Mission + Under watch",
      "price.uF5": "Execution Gap, rituals & visualizations",
      "price.uF6": "Roadmap priority & direct support",
      "price.uF7": "For founders who actually close — not just plan",
      "price.uCta": "Start Free",
      "price.trust": "AI credits cover Pro actions: execution plans, voice, and suggestions. Full access today while we build — no credit card.",

      // Final CTA
      "cta.title": "Stop planning alone. Start closing.",
      "cta.subtitle": "Today's mission is waiting. So is your coach.",
      "cta.button": "Start Free",

      // Footer
      "footer.tagline": "Nuvia Flow — The Personal Operating System for founders who execute.",

      // Meta
      "meta.title": "Nuvia Flow — AI execution coach for founders",
      "meta.description": "Personal Operating System with a proactive Telegram coach. Today's Mission, accountability, execution plans, and real metrics — for founders who close, not just plan."
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

    ['es', 'en'].forEach(function (code) {
      var btn = document.getElementById('lang-' + code);
      if (btn) {
        var active = lang === code;
        btn.classList.toggle('bg-blue-500/20', active);
        btn.classList.toggle('text-blue-300', active);
        btn.classList.toggle('font-medium', active);
        btn.classList.toggle('text-slate-400', !active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
      var mobileBtn = document.getElementById('lang-' + code + '-mobile');
      if (mobileBtn) {
        var mobileActive = lang === code;
        mobileBtn.classList.toggle('bg-blue-500/20', mobileActive);
        mobileBtn.classList.toggle('text-blue-300', mobileActive);
        mobileBtn.classList.toggle('font-medium', mobileActive);
        mobileBtn.classList.toggle('text-slate-400', !mobileActive);
        mobileBtn.setAttribute('aria-pressed', mobileActive ? 'true' : 'false');
      }
    });
  }

  document.getElementById('lang-es').addEventListener('click', function () { setLang('es'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });
  var langEsMobile = document.getElementById('lang-es-mobile');
  var langEnMobile = document.getElementById('lang-en-mobile');
  if (langEsMobile) langEsMobile.addEventListener('click', function () { setLang('es'); });
  if (langEnMobile) langEnMobile.addEventListener('click', function () { setLang('en'); });

  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  setLang(getLang());
})();
