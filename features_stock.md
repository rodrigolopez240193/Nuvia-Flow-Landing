# Inventario de features (Nuvia Flow)

Lista orientada a **amplitud**; cada viñeta es una capacidad distinta del producto o del stack.

## Landing messaging (2026-06)

Posicionamiento público en `flow-landing/` — alinear con producto live en `app.nuviaflow.app`.

| Promesa en landing | Estado producto | Notas |
|--------------------|-----------------|-------|
| Personal Operating System para founders | Live | Hero + footer |
| Nuvia Coach · Telegram + app | Live | Standup, accountability, Today's Mission |
| Today's Mission + Under watch | Live | Today dashboard, coaching APIs |
| Execution Plan + voz | Live | Task plan workspace, Whisper |
| Captura inteligente (voz, @área, semántica) | Live | Quick Capture, voice API |
| Grafos de proyecto | Live | Project map |
| Rituals y visualizaciones | Live | `/rituals`, visualization boards |
| Execution Gap analytics | Live | Statistics page |
| PWA instalable | Live | vite-plugin-pwa |
| Planes Free / Premium / Ilimitado | Marketing (enforcement pendiente) | Free: 3 áreas, 5 créditos IA. Premium $10: 100 créditos. Ilimitado $25: IA + coach sin techo |

**CTA único:** Empezar gratis → `https://app.nuviaflow.app/`

**Social proof:** copy genérico (sin stats personales, proyectos reales ni atribución nominal).

## Cuenta y acceso

- Registro y login con email y contraseña
- Rutas de app protegidas por sesión
- Flujo de “olvidé contraseña” + restablecimiento con token
- Roles (p. ej. admin / usuario)
- Estados de cuenta de usuario (activo, pendiente verificación, suspendido, eliminado)
- Verificación de email (tokens)
- Refresh tokens
- Log de logins (auditoría básica: dispositivo, ubicación opcional)

## Cuenta y workspace (datos)

- Organización multi-usuario: cuentas con propietario
- Miembros con rol en la cuenta
- Plan (p. ej. FREE) y límites (usuarios, proyectos)
- Suscripciones por proveedor
- Datos de facturación asociados a la cuenta

## Perfil y preferencias

- Perfil: nombre, foto, zona horaria
- Perfil extendido: puesto, biografía
- Tema claro / oscuro (persistente)
- Idioma EN / ES
- Recordar última área activa
- Recordar última vista de tareas
- Página dedicada de perfil

## App shell y navegación

- Layout con rutas protegidas
- Navegación lateral entre módulos
- Página 404

## Hoy (Today)

- Home `/` con vista “Hoy”
- Resumen vía API dashboard `today`

## Inbox

- Lista de tareas inbox
- API dedicada de inbox

## Tareas — núcleo

- Listado `/tasks` y detalle `/tasks/:taskId` (URL compartible)
- Crear y editar (título, descripción, etc.)
- Estados: por hacer, en progreso, hecha, cancelada
- Prioridades: crítica, alta, media, baja
- Fechas de vencimiento
- Marca de foco
- Tareas congeladas
- Subtareas y jerarquía (padre, profundidad)
- Selector de candidatos a tarea padre
- Relaciones entre tareas (por tipo)
- Estimación en minutos
- Marca temporal de completado
- Campo de contexto de tarea
- Orden / posición en listas

## Vistas de tareas guardadas

- Vistas personalizadas en modo tabla o tablero
- Filtros persistidos por vista
- Criterio de orden por vista
- Columnas visibles configurables
- Vista por defecto del usuario
- Vistas integradas (built-in)

## Búsqueda, similares y captura rápida

- Búsqueda rápida global (Command Center / quick search)
- Búsqueda avanzada con criterios (POST)
- Sugerencias de **tareas similares** (embeddings / API)
- Quick Capture: título + prioridad + fecha rápida
- Atajos `@` (área) y `/` (proyecto) en captura
- Tags en título con `#`
- Command Center `⌘/Ctrl+K`: comandos, búsqueda, crear
- Atajos de teclado en lista de comandos
- Atajos en panel de similares (↑↓, Enter, Esc para cerrar sugerencias)
- Abrir detalle de una tarea similar desde captura
- Flujo “etiquetar ambas” (tag en existente + próxima creación)

## Proyectos

- CRUD completo
- Proyectos agrupados por área
- Emoji y estado (p. ej. activo)
- Orden manual
- Objetivo, fecha meta, cadencia de ciclo
- Proyecto en foco / congelado
- Tipo de grafo del proyecto
- Vista mapa / grafo `/project/:id/map`
- Contexto IA del proyecto (generación y actualización)
- Historial de contexto IA

## Áreas

- CRUD de áreas
- Emoji, color, descripción
- Tipos de área (sistema y personalizados; soporte bilingüe en datos)
- Flag de validez / archivo lógico
- Gestión en Ajustes → Áreas

## Etiquetas (tags)

- CRUD de tags
- Asignación many-to-many en tareas
- Gestión en Ajustes → Tags

## Stakeholders

- Personas humanas y tipo “agente IA”
- Email e icono / avatar
- Asociación a áreas y a tareas
- Gestión en Ajustes → Stakeholders

## Importación y exportación (CSV)

- Exportar tareas a CSV (+ plantilla)
- Importar: validar archivo, ejecutar, rollback
- Plantilla de importación descargable

## Tiempo de trabajo en tareas

- Iniciar / detener seguimiento en una tarea
- Historial de ejecución (duración, interrupciones)

## Hábitos

- Módulo dedicado `/habits`
- Hábitos simples vs medibles (unidad y meta)
- Categorías
- Vínculo opcional a área
- Orden manual y hábito activo/inactivo
- Completar por día
- Registro de eventos con valor numérico (hábitos medibles)

## Estadísticas

- Página `/statistics`
- API dashboard de estadísticas

## Asistente e IA

- Página `/assistant`
- APIs de asistente y de tareas IA
- Embeddings por tarea (texto, modelo)
- Registro de inteligencia por tarea (scores, confianza, cluster, etc.)
- Clusters de similitud
- Sugerencias IA con estado aceptado/rechazado
- Insights por proyecto (IA)

## Notificaciones

- Bandeja: pendientes, enviadas, leídas
- Canales por envío (email, etc.)
- Reglas configurables (tipo, hora, inactividad, umbral de completadas, área/proyecto)
- Preferencias: email on/off
- Preferencias: Telegram (on/off, chat id)
- Preferencias: WhatsApp (on/off, número)
- Horas silenciosas
- UI de reglas en Ajustes

## Telegram

- Webhook en backend
- Tokens de enlace usuario–bot
- Sección de integración en Ajustes

## Infra y API

- Jobs programados (endpoints cron)
- Health check
- Documentación API / Swagger (incl. redirect legacy)

## i18n y UX

- Interfaz en inglés y español
- Toasts y feedback al guardar
- Tema acoplado a preferencias y `ThemeProvider`
