# ProBarranquilla Home: pendientes

Referencia aprobada: `Home.jpg` (1366 px de ancho). Todo el contenido editable vive en `src/data/content.ts`.

## Cómo ejecutar

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # typecheck + build de producción en dist/
```

## 1. Recursos gráficos que faltan

Copia cada archivo con **exactamente** esta ruta y nombre dentro de `public/`. El placeholder rayado desaparece solo; no hay que tocar código.
Si cambias el formato (por ejemplo, `.svg` en vez de `.png`), actualiza la ruta en `src/data/content.ts`.

| Ruta en `public/` | Uso |
|---|---|
| `assets/hero/hero-2.jpg`, `hero-3.jpg` | Slides 2 y 3 del hero (el diseño muestra 3 puntos). Si no existen, borra esas entradas en `hero.slides` |
| `assets/casos/enel.jpg` | Foto del caso de éxito de Enel (el logo ya está) |
| `assets/noticias/canpack.jpg`, `embraer.jpg`, `puente.jpg` | Fotos de las 3 noticias |
| `assets/ayuda/malecon.jpg` | Foto panorámica de la sección "Cómo ProBarranquilla puede ayudarte" |

**Ya incorporadas (Home):**
- `hero/hero-1.jpg`: se tomó de `src/Img/Home/Hero Principal.jpg`, optimizada a 242 KB. La exportación traía incrustados los 3 puntos del carrusel; en la copia del sitio se cubrieron con agua de la misma foto. Si se exporta una versión sin puntos, basta con reemplazar el archivo.
- `razones/*.png`: las 5 fotos del mosaico. Vienen a tamaño 1×; para pantallas retina conviene una exportación a 2×.

`fila3-logo-1`: en la referencia, el primer logo de la tercera franja está recortado ("…TIA") y no se puede identificar.

## 2. Destinos y datos pendientes

Todos los enlaces usan `href: '#'` hasta que se definan:

- Barra superior: Prodata, ExpoProBarranquilla, Find Connections, Contact PB, selector ES/EN.
- **Mega menús** (`mainNav` en `content.ts`): hoy tienen destino ¿Por qué Barranquilla? → página `/instalate-en-barranquilla/`, y tres anclas absolutas del Home: Resultados e impacto → `/#resultados`, Casos de éxito → `/#casos-de-exito` y Noticias → `/#noticias`. Todos los demás están pendientes:
  - Instálate: ¿Cómo te apoyamos?, Guías y recursos de ciudad.
  - Sectores: los 7 sectores.
  - Herramientas: Guía del inversionista, Guía tributaria, Simulador de Impuestos, Boletines. PRODATA comparte destino con "Prodata" de la barra superior (`routes.prodata`).
  - Haz tu evento: los 5 enlaces. Repiten los textos de "Instálate", pero deben llevar a rutas de eventos.
  - Sobre: Quienes somos, Servicios, Equipo, Comunidad de miembros, Informes de labores.
- Tarjetas del mosaico, "Ver más casos", noticias, "Ver todos", "Contáctanos".
- Política de privacidad, ¿Tienes preguntas?
- **Botón flotante "Hablemos"** (reemplazó al de WhatsApp en todo el sitio): enlaza a `routes.contacto`, el mismo destino de "Contact PB", que aún no está definido. La silueta del caimán (`CAIMAN_PATH` en `src/components/HablemosTab.tsx`) se trazó a partir de la referencia; si existe el vector oficial, reemplaza ese path.
- **Categorías de las noticias:** se asignaron de forma provisional (las 3 en Inversiones; la tercera también en Turismo de reuniones). ExpoProBarranquilla no tiene noticias. Hay que confirmar las categorías.
- **Casos de éxito:** ya están las fotos, logos y textos de Bavaria, Adama, BCCY y Enel. Falta solo la foto de Enel (`assets/casos/enel.jpg`).

## 3. Diferencias entre el prompt y Home.jpg (se siguió Home.jpg)

- Navegación: "Instálate en Barranquilla" (no "Invertir en Barranquilla").
- Barra superior: "Prodata" (no "Productos"). El indicador es un reloj ("Colombia - GTM - 5 - hh:mm:ss"), no un tipo de cambio. Muestra la hora real de Bogotá.
- Footer: 5 redes sociales, sin correo. Los enlaces inferiores son "Politica de privacidad" y "¿Tienes preguntas?" (no "Términos de uso").

## 4. Posibles erratas copiadas tal cual de la referencia (validar con el cliente)

- "GTM" (probablemente "GMT").
- "¿Por qué las empresa globales…" (falta la "s"), en dos secciones. Además, la sección turquesa repite el título de la sección anterior.
- "Empleos directo" (falta la "s").
- "estandares" (sin tilde) y "Politica" (sin tilde).
- "Conoce algunos de los eventos…" acompaña un caso que es de una empresa, no de un evento.
- Mega menú: "Quienes somos" (sin tilde) y "Simulador de Impuestos" (con mayúscula), tal como en la referencia. La opción de navegación sigue siendo "Instálate en Barranquilla" (el brief la llama "Invierte en Barranquilla").

## 6. Notas del mega menú

- El color del acento "ProBarranquilla" (#32BEF0) se tomó de la captura: es un cian claro, no el turquesa #23AA99 de la sección de resultados.
- Herramienta de QA, solo en desarrollo: `http://localhost:5180/?mega=sectores` abre un panel al cargar (ids: invierte, sectores, herramientas, evento, sobre). No se incluye en el build de producción.

## 7. Página "Instálate en Barranquilla"

URL: `/instalate-en-barranquilla/`. Referencia: `Instalate en Barranquilla.jpg` (1366 × 10154). Contenido y recursos: `src/data/instalate.ts`. Componentes: `src/pages/instalate/`.
Todos los textos se pudieron transcribir de la referencia a resolución completa: **no hay textos pendientes**.

**Imágenes por sustituir** (en `public/assets/instalate/`; cada entrada de `instalateAssets` permite editar `src`, `alt`, `fit` y `position`):

| Archivo | Uso |
|---|---|
| `hero-malecon.jpg` | Hero: Malecón al atardecer |
| `plataforma-portuaria.jpg` | Área gris de "Una plataforma portuaria para el mundo" (en la referencia todavía es un bloque gris #C4C4C4) |
| `mapa-conectividad-aerea.png` | Mapa con rutas aéreas (fondo del panel 01; se ancla a la derecha) |
| `mapa-terminales-portuarias.png` | Mapa del río con logos de terminales (Compas, Vopak, Monómeros, Riverport, Bitco, Palermo, Puerto de Barranquilla, Port Magdalena) |
| `zf-barranquilla.jpg`, `zf-zofia.jpg`, `zf-palermo.jpg`, `zf-la-cayena.jpg`, `zf-zoma.jpg` | Fotos de las 5 zonas francas |
| `logo-zf-barranquilla.png`, `logo-zofia.png`, `logo-palermo.png`, `logo-la-cayena.png`, `logo-zoma.png` | Logos de las zonas francas |
| `profesional.png` | Retrato con fondo transparente (caja de 535 × 452; se apoya abajo) |
| `sena-servicios.jpg`, `sena-madera-muebles.jpg`, `sena-metalurgia.jpg`, `sena-logistica.jpg`, `sena-agro.jpg` | Fotos de las 5 tarjetas SENA |
| `banner-vision.jpg` | Fondo del banner "Una visión compartida" |

El caso de éxito reutiliza los recursos del Home (`assets/casos/…`).

**Destinos y contenido pendientes**
- Botones del hero: "Explora las ventajas" y "Solicita acompañamiento".
- Pestañas "Conectividad terrestre" y "Conectividad en telecomunicaciones": sin contenido. Se ven como en el diseño, pero no se activan hasta que se cargue su `content` en `connectivity.tabs`.

**Diferencias con el brief (se siguió la imagen)**
- Botón del hero: "Explora las ventajas" (el brief dice "Explora la ciudad").
- La tercera pestaña es "Conectividad en telecomunicaciones" (el brief dice "marítima").
- La etiqueta de la sección SENA dice "PRESENCIA REGIONAL MULTIDECIMAS": parece una errata, hay que validarla.
- La cifra "+1.5 toneladas" (carga general) no dice "millones", a diferencia de las demás: hay que validarla.
- En el footer de la referencia falta la línea "Barranquilla, Colombia". Se reutiliza el footer del Home sin cambios.

## 8. Página "Noticias"

URL: `/noticias/`. Referencia: `Noticias.jpg` (1366 × 2837). Datos: `src/data/noticias.ts`. Componentes: `src/pages/noticias/` y `src/components/NewsCard.tsx` (compartida con el Home, variante `grid`).
Enlazada desde "Noticias" (mega menú "Sobre ProBarranquilla") y desde "Ver todos" de las noticias del Home.

**Imágenes por sustituir** (en `public/assets/noticias/`):
- `hero-noticias.jpg`: dos mujeres con el reconocimiento. Punto focal en `newsPage.hero.image.position` ('70% 30%').
- `listado/n01-eventos-internacionales.jpg` … `listado/n09-espacio-corporativo.jpg`: las 9 fotos, en el orden de la referencia (nombres en `articles`).

**Datos y conexiones pendientes**
- **Fuente de datos:** `loadNews()` lee hoy las 9 noticias locales. Para conectar un CMS o API, reemplaza su cuerpo y conserva la firma `{ category, offset, limit } → { items, total }`.
- **Ver más:** pide el siguiente grupo a esa fuente. Como no hay más noticias, al pulsarlo anuncia "No hay más noticias por ahora" y desaparece. No simula ninguna carga.
- **Categorías:** se asignaron de forma provisional según el titular. Las Wingo (7 y 8) quedaron en Turismo de reuniones. Hay que confirmarlas.
- **Titulares:** los "..." son truncamientos de la captura. Hay que reemplazarlos por los titulares completos (el CSS limita a 3 líneas). Las tarjetas 6 y 9 repiten titular en la referencia.
- **Detalle de cada noticia:** `href` pendiente (`#`). Las páginas de detalle no entran en este alcance.

**Notas**
- El footer usa la variante `wide` (sin la línea "Barranquilla, Colombia", con el logo más adentro y las redes al borde), igual que en `Noticias.jpg`. La captura de Instálate muestra la misma variante; esa página sigue con el footer del Home para no modificarla sin indicación. Para cambiarla, pasa `footerVariant="wide"` a `SiteShell`.
- Los titulares de las tarjetas usan Montserrat Bold a 19 px: es más ancha que la fuente de la captura y, a 20 px, cortaba el texto antes que la referencia.

## 9. Detalle de noticia (`/noticias/<slug>/`)

Referencia: `Noticia independiente.jpg`. Plantilla única en `src/pages/articulo/`, con los datos en `src/data/noticias.ts` (`body`: bloques de párrafo o imagen en cualquier orden).
- **Rutas:** en desarrollo, un plugin de Vite (`vite.config.ts`) sirve la plantilla para cada slug publicado y `404.html` para el resto. En el build genera `dist/noticias/<slug>/index.html` con título, meta descripción y Open Graph propios.
- **Cómo publicar una noticia:** agrega `body` (y opcionalmente `hero` y `seo`) a su registro. Desde ese momento su tarjeta del listado enlaza al detalle. Sin `body` sigue en `#`, para no inventar contenido.
- Hoy solo **n01** ("Barranquilla fortalece su posicionamiento internacional…") tiene detalle. Su titular se completó con "económico" (la captura lo corta en "económic").

**Imágenes por sustituir** (en `public/assets/noticias/detalle/`):
- `n01-hero.jpg`: foto del hero (punto focal '62% 35%').
- `n01-interior.jpg`: foto interior en formato 3:1 (encuadre independiente del hero).

**Pendientes**
- **"Últimas noticias" en el detalle:** reutiliza la sección del Home, incluida su tercera tarjeta cortada en el borde, que también aparece así en la referencia. Usa la colección del Home (`news.items` en `content.ts`), excluyendo la noticia abierta. Los filtros "Noticias", "Eventos" y "Desarrollo" se ven como en el diseño, pero no filtran hasta que exista esa categorización.
- **Colecciones separadas:** el Home y el listado todavía usan colecciones distintas. Conviene unificarlas cuando se conecte el CMS.
- **Fechas a validar:** la tarjeta de n01 dice "Febrero 9 de 2026", pero el cuerpo dice "17 de junio de 2026". No se publicaron datos estructurados ni `datePublished` hasta confirmar la fecha.
- **URL canónica:** se agregará cuando se configure el dominio.
- **Transcripción literal de la captura** (posibles erratas a validar):
  - "durante el 2025 representan" (el brief dice "representaron");
  - "Argentina, Uruguay Paraguay" (falta la "y");
  - el último párrafo va sin comillas, como en la imagen.

## 10. Página "Sobre ProBarranquilla" (`/sobre-probarranquilla/`)

Referencia: `Sobre probarranquilla.png` (1366 px, resolución completa). Textos y recursos en `src/data/sobre.ts`.
Todos los textos visibles se transcribieron de la referencia; no se inventó ningún dato.

**Recursos gráficos** (en `public/`, mismo nombre exacto):

| Ruta en `public/` | Uso |
|---|---|
| `assets/sobre/hero-ventana-al-mundo.jpg` | Hero. En la referencia es una escultura en el Malecón (no la Ventana al Mundo, como decía el prompt); la ruta se puede cambiar en `aboutHero.image` |
| `assets/sobre/que-hace-acompanamiento.jpg`, `que-hace-posicionamiento.jpg`, `que-hace-seguimiento.jpg` | Fotos de los 3 banners de "¿Qué hace?" |
| `assets/sobre/historia-1988.jpg` … `historia-2021.jpg`, `historia-hoy.jpg` | Foto de cada hito (8) |
| Fondo geográfico de "Nuestra historia" | Sin archivo: asignar `history.background` en `sobre.ts` cuando llegue (se pinta al 50 % de opacidad) |
| `assets/equipo/<nombre>.jpg` | 19 retratos. Nombre = nombre de la persona sin tildes, en minúsculas y con guiones (p. ej. `vicky-osorio.jpg`, `maria-t-urueta.jpg`). El placeholder en desarrollo muestra la ruta exacta |

**Contenido pendiente**
- Historia: solo 1988 tiene título legible ("Promotora de Desarrollo Urbano"). Faltan título y descripción de 1992, 2002, 2008, 2015, 2016, 2021 y Hoy (`history.milestones`); mientras tanto el panel muestra el año y la foto. 1988 tampoco tiene descripción.
- Consejo directivo: faltan los miembros y cargos oficiales (`board.members`). El acordeón abre vacío en producción (en desarrollo muestra un aviso).
- Menú "Sobre ProBarranquilla": "Quienes somos" y "Equipo" ya enlazan a esta página (`/sobre-probarranquilla/` y `#equipo`). "Servicios" y "Comunidad de miembros" siguen sin destino definido.

**Diferencias entre el prompt y la referencia (se siguió la imagen)**
- Títulos de los banners: "Acompañamiento", "Posicionamiento" y "Seguimiento" (el prompt decía posicionamiento / fortalecimiento / relacionamiento).
- Cifra de empleos: "3581", sin punto de miles (el prompt decía "3.581").
- Footer: la referencia pone "Barranquilla, Colombia" primero; se mantiene al final, como pediste para todo el sitio.

**Posibles erratas de la referencia (validar con el cliente)**
- La introducción del equipo dice "cuatro grandes áreas", pero la página muestra siete.
- Filtro "Atracción de inversores" vs. área "Atracción de Inversiones"; "Angelica Bolivar" y "Diego Ramirez" sin tilde; "Analista de Gestión de información" con minúscula.
- Las tarjetas 1 y 2 de servicios están justificadas y la 3 no (se respetó tal cual; cambiar `justify` en `investmentStages`).

## 5. Notas de tipografía

- Montserrat Bold (local, `public/fonts`) en titulares, cifras y titulares de tarjetas. Geist Regular (paquete `geist`) en el resto.
- Se añadió Geist SemiBold (misma familia) solo para las negritas que se ven en la referencia: la frase destacada de Bavaria y el nombre del edificio en el footer.
- En la referencia, los titulares del mosaico y de las noticias parecen de una sans tipo Geist/Inter en semibold. Por la regla tipográfica obligatoria se usa Montserrat Bold.

## 11. Página "Casos de éxito" (`/casos-de-exito/`)

Referencia: `Casos de exito.png` (1366 px). Datos en `src/data/casos.ts`.
- Foto de Bavaria tomada de `ProBarranquilla/Casos de éxito/Bavaria` (optimizada en `assets/casos/bavaria-equipo.jpg`).
- Muestra los mismos 4 casos del Home (textos y logos de `successStories`), con puntos y avance automático cada 6 s (sin flechas). Bavaria usa la foto grande del equipo; Adama y BCCY usan la foto del Home ampliada (se ve suave a ancho completo, y la de Adama trae el logo incrustado que queda detrás de la tarjeta). Conviene recibir fotos horizontales grandes de Adama, BCCY y Enel (Enel aún no tiene foto).
- "Ver más casos" del Home y "Casos de éxito" del mega menú ahora llevan a esta página.
- La referencia omite "Barranquilla, Colombia" en el footer; se mantuvo el footer global sin cambios.

## 12. Página "Haz tu evento — Turismo de reuniones" (`/haz-tu-evento-en-barranquilla/`)

Referencia: `Haz tu evento - Turismo de reuniones.png` (1366 px, resolución completa). Datos en `src/data/evento.ts`.
El menú "Haz tu evento" ya enlaza a la página y a sus secciones (apoyo, resultados, biblioteca); "Casos de éxito" va a `/casos-de-exito/`.

**Recursos gráficos** (en `public/`):

| Ruta | Uso |
|---|---|
| `assets/evento/etapa-*.jpg` (5) | Fotos de las 5 etapas de "¿Cómo te apoyamos?" (apoyo a candidaturas, conexión con aliados, acceso a proveedores, visitas de inspección, experiencias de destino) |
| `assets/equipo/fiorella-rivera.jpg`, `angelica-bolivar.jpg` | Retratos de contacto (los mismos del equipo en Sobre ProBarranquilla) |

**Contenido y configuración pendientes**
- Sección de video "Barranquilla, un destino que se vive": quitada de la página por pedido del cliente (el componente `VideoBlock` queda en el código sin usar).
- Kit de promoción de ciudad: Guía de Ciudad y Guía Gastronómica enlazan a los PDF oficiales de probarranquilla.org (agosto 2025), portadas renderizadas del PDF. Su popup pide Nombre, Organización, Ciudad y la política (sin correo). "Descubre Barranquilla" abre baq.com.co; su imagen es un recorte de la imagen para compartir de ese sitio.
- Formulario: falta el endpoint (`eventForm.endpoint`). Valida los campos, pero sin endpoint muestra un error y no simula el envío. Faltan las opciones de "Tipo de evento" y "Asistentes estimados" (`eventForm.eventTypes`, `attendeeRanges`).
- Aerolíneas: se reprodujeron como etiquetas de texto con su color, igual que en la referencia. Si se prefieren los logos oficiales, hacen falta los archivos.
- Hoteles: los indicadores aparecen solo cuando hay más de una página (en escritorio caben los 3 hoteles, así que no se muestran; la referencia dibuja 4 puntos).

**Diferencias con el prompt (se siguió la imagen)**
- Párrafo del hero: "…donde los eventos crean oportunidades de largo plazo, impulsan industrias estratégicas y dejan legado…".
- Descripción de "Atracción de eventos": "…lideramos estrategias para atraer congresos, convenciones y eventos…".
- Botón del formulario: se usó "Enviar solicitud" (la referencia dice "Envíar", con tilde de más).

## 13. Página "Sectores" (`/sectores/`)

Referencia: `Sectores.png` (1366 px). Datos en `src/data/sectores.ts`. El menú "Sectores" enlaza a cada sección (Químicos, Alimentos, Materiales, Energía, BPO & IT, MRO, Otros).
- El hero usa la foto del Home (`assets/hero/hero-1.jpg`): es la misma panorámica de la rueda.

**Recursos gráficos** (en `public/assets/sectores/`): `quimicos-ciencias-de-la-vida.jpg`, `materiales-construccion.jpg`, `energia-transicion.jpg` (los tres son grises en la referencia), `mro-hangar.jpg` (foto del hangar) y `cta-ventana-al-mundo.jpg` (foto del CTA final).

**Destinos pendientes**
- "Conocer el sector" (Químicos): no existe la ficha del sector; el botón queda deshabilitado (`chemicals.cta.href`).
- "Consultar sobre BPO & IT" y "Hablar con nuestro equipo" usan `routes.contacto`, el mismo destino de "Contact PB", que sigue sin definir.
- "Conocer nuestros servicios" lleva a "Sobre ProBarranquilla", sección de acompañamiento a la inversión.

**Diferencias con el prompt (se siguió la imagen)**
- Manufactura: "…y una cadena empresarial diversificada" (el prompt decía "economía").
- BPO: "Contamos con convenios académicos y programas de formación en inglés en el Atlántico."
- Píldoras de "Otros sectores": Logística Portuaria, Turismo MICE, Agroindustria y Moda & Creatividad.

**Posibles erratas de la referencia (validar con el cliente)**
- "Transporte & Exportación" repite el texto de "Empaque & conservación" ("Tecnología de empaque sostenible").
- "Materiales para la Construcción" repite la descripción de "Alimentos y Bebidas", y sus tarjetas repiten "Acceso agroindustrial y puertos" / "Sistemas automatizados e higiene".
- Las píldoras de "Manufactura" son las mismas de "Servicios" (Energía Renovable, BPO/KPO & IT, MRO).

## 14. Página "Boletines" (`/boletines/`)

Portadas y PDF tomados de la página oficial https://probarranquilla.org/boletin-socioeconomico/ (las 24 portadas coinciden con la referencia; los 24 PDF responden 200). Portadas en `public/assets/boletines/*.webp`. Los PDF se enlazan al sitio oficial y se abren en pestaña nueva (son ~87 MB en total; no se copiaron al proyecto).

**Pendiente**
- [ ] Foto del hero: vista aérea de bodegas industriales de la referencia. No está en el proyecto, en la carpeta del cliente ni en la web oficial. Guardar en `public/assets/hero/boletines.jpg`.

**Para validar con el cliente (se conservó lo de la referencia, no se corrigió)**
- [ ] "Agosto 2024": la portada dice "Septiembre 2024 · Edición 009".
- [ ] "Septiembre 2023": la portada dice "Edición 009", el mismo número que Junio 2024.
- [ ] "Noviembre 2023": en la web oficial su botón abre el PDF de **septiembre 2023** (mismo archivo que la tarjeta siguiente). Falta el PDF de noviembre.
- [ ] Números de edición repetidos en portadas: Mayo 2025 y Octubre 2024 (010); Marzo 2025 y Junio 2024 (009).
- [ ] "Primer boletín 2022" enlaza a un archivo llamado "Segundo reporte"; "Tercer trimestre 2022" a uno llamado "II Boletín". Confirmar que sean los correctos.
- [ ] Último boletín: el prompt decía "Enero/Diciembre 2022"; la referencia, la portada y la web dicen **2021**. Se usó 2021.

## 15. Popup de datos antes de descargar (todo el sitio)

Cada botón de descarga (boletines y, cuando tengan archivo, las guías de "Haz tu evento") abre un formulario con Nombre, Correo, Organización, Ciudad y la aceptación de la política de tratamiento de datos (https://probarranquilla.org/politicas-tratamiento/) con Sí / No. Con "No" no se descarga. Datos editables en `src/data/descargas.ts`; componente `src/components/DownloadGate.tsx`.

- [ ] **Destino de los datos (endpoint, CRM o correo).** Hoy `downloadForm.endpoint` es `null`: el documento se entrega, pero los datos **no se guardan en ningún lado**. Al definirlo, se envían por POST (JSON: name, email, organization, city, acceptsPolicy, document, url).
- [ ] Confirmar si debe pedirse en **cada** descarga (como ahora) o solo la primera vez por visita. Hoy se pide siempre, pero los campos quedan precargados en la misma pestaña.
- [ ] Validar con el cliente el texto del popup ("Descarga el documento" / "Déjanos tus datos para acceder a la publicación.") y si la ciudad debe ser lista o texto libre.

## 16. Páginas de "Herramientas" (plantilla común de Boletines)

Plantilla compartida: `src/components/ResourcePage.tsx` + `ResourceCard.tsx` (Boletines ahora la usa, sin cambios visuales). Contenido en `src/data/herramientas.ts`. Diseño de las cards con texto según `Guia-del-inversionista.png`. El menú Herramientas, el botón PRODATA y "Prodata" de la barra superior ya enlazan a estas páginas.

| Página | Ruta | Contenido |
|---|---|---|
| Guía del Inversionista | `/guia-del-inversionista/` | 2 PDF oficiales (ES y EN, mayo 2026), portadas renderizadas del PDF, con popup de datos |
| Guía Tributaria | `/guia-tributaria/` | PDF oficial Guía Tributaria 2025, portada renderizada del PDF, con popup de datos |
| Simulador de Impuestos | `/simulador-de-impuestos/` | Botón al simulador oficial (prodata.probarranquilla.org), sin popup (no es descarga) |
| ProData | `/prodata/` | Texto del cliente + botón "Explora ProData" y las 3 secciones de la web oficial (Mapas, Indicadores, Repositorio) |

**Pendiente**
- [ ] Fotos de hero (las 4 páginas muestran placeholder): `public/assets/hero/guia-inversionista.jpg`, `guia-tributaria.jpg`, `simulador-de-impuestos.jpg`, `prodata.jpg`. La foto de la guía en la carpeta del cliente (`Guia del Inbversionista/001.jpeg`) solo mide 500×400 px: sirve si llega en alta resolución.
- [ ] Imagen de "Indicadores" de ProData: en la web oficial solo existe a 225×144 px (se ve pequeña en la card).
- [ ] Etiquetas de botón propuestas (no venían en el contenido): "Ir al simulador" y "Explorar" en las secciones de ProData.
- [ ] "Explora ProData" apunta a https://probarranquilla.org/prodata/ (la página oficial actual, como se indicó). Confirmar si debe ir a la plataforma (https://prodata.probarranquilla.org/) cuando este sitio reemplace al actual.
- [ ] Las secciones de ProData llevan al inicio de sesión de la plataforma (así está en la web oficial).


## Haz tu evento — Casos de éxito
- Fotos de 3 eventos en `public/assets/evento/casos/`: fedetranscarga.jpg, expoacccsa.jpg y curso-cirugia-plastica.jpg. No se encontraron fotos del evento en Barranquilla (de ExpoACCCSA solo hay un banner de un expositor). Mientras tanto se ve el marcador de imagen.
- Las otras 6 fotos vienen de probarranquilla.org (OCDE) y de la prensa: Blu Radio (IRONMAN), El Universal (Fedepalma, foto genérica de fruto de palma, no del evento), La Nota Económica (Latam Fintech), El Heraldo (Giro de Rigo y PANLAR). Confirmar derechos de uso o reemplazar por fotos propias de ProBarranquilla.

## Haz tu evento — Conectividad aérea
- Logos de aerolíneas tomados de Wikimedia Commons (Avianca, Air Europa, American, JetBlue, Wingo, Copa, LATAM, JetSMART), de satena.com (Satena) y de flyzair.com (EZ Air, que hoy opera como Z Air). Reemplazar por los oficiales de la carpeta de audiovisuales cuando lleguen: `public/assets/evento/aerolineas/<nombre>.png`.
- Mapas dibujados en SVG con geografía real (Natural Earth, `src/data/airMaps.ts`). Madrid queda fuera del encuadre del Caribe: su ruta sale por el borde con una flecha.

## Haz tu evento — Infraestructura para eventos
- Hoteles: fotos de exterior e interior tomadas de `src/pages/Hoteles` (Marriott exterior convertida desde el RAW .DNG: solo trae 960 px). Faltan fotos de Hotel Dorado Plaza y del Centro de Eventos Puerta de Oro (`public/assets/evento/hoteles/dorado-plaza.jpg`, `puerta-de-oro.jpg`).
- Hotel Dorado Plaza: la dirección enviada (Carrera 53, Calle 100-86) es la misma del Hilton Garden Inn. Confirmar la correcta.
- Hotel GHL Barranquilla: el cliente no indicó salones; la tarjeta solo muestra habitaciones y dirección.

## Instálate — Oferta de zonas francas
- Foto de la Zona Franca de Barranquilla: vista aérea de bodegas tomada de zonafrancabarranquilla.com (el mismo operador administra ZOFIA; confirmar que corresponde a la Zona Franca de Barranquilla).
- Fotos de ZOFIA, La Cayena y Palermo: de probarranquilla.org (600 px de ancho, algo pequeñas). ZOMA: imagen del proyecto (render) de zomazf.com. Reemplazar por fotos reales en alta resolución si las hay.


- SENA (Instálate): fotos de los 5 centros tomadas de prensa (El Heraldo, El Universal) y probarranquilla.org. Algunas son de inauguraciones u obras, no de los laboratorios; reemplazar por fotos propias si las hay.

- Instálate, Casos de éxito: textos de Garsite, Steelforce y Foundever redactados con información pública (Valora Analitik, El Heraldo, sitios oficiales); confirmar con el cliente. Fotos y logos de internet (Foundever usa una imagen genérica de su sitio). Subtítulo adaptado a "empresas".

- Instálate, "Un territorio que hace que las cosas pasen": faltan los 3 testimonios (foto `public/assets/instalate/testimonio-1.jpg`, `-2`, `-3`; cita, nombre, cargo y empresa en `vision.testimonials` de `src/data/instalate.ts`). Mientras tanto se ven espacios de muestra.
