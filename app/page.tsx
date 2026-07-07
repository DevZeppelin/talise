import Image from "next/image";

import Reveal from "./reveal";
import { SITE_NAME, SITE_URL } from "./site";

import heroPlanta from "@/public/images/hero-planta.png";
import manantial from "@/public/images/arroyo.png";
import botellas from "@/public/images/botellas.jpeg";
import botella600 from "@/public/images/productos/botella600.png";
import botella1500 from "@/public/images/productos/botell1500.png";
import bidon6 from "@/public/images/productos/bidon6.png";
import bidon20 from "@/public/images/productos/bidon20.png";
import dispensers from "@/public/images/productos/dispensers.png";
import plantaExterior from "@/public/images/planta-exterior.png";
import plantaInterior from "@/public/images/fabrica.png";
import plantaNieve from "@/public/images/planta-nieve.jpeg";
import bidonesStock from "@/public/images/bidones-stock.png";

const WHATSAPP_URL =
  "https://wa.me/5492804538788?text=Hola%20Talise!%20Quiero%20hacer%20una%20consulta.";

const WHATSAPP_DISTRIBUIDORES_URL =
  "https://wa.me/5492804538788?text=Hola%20Talise!%20Quiero%20distribuir%20agua%20Talise.";

const INSTAGRAM_URL = "https://www.instagram.com/talise.aguamineral/";
const FACEBOOK_URL = "https://www.facebook.com/DistribucionTalise";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.25-1.5 1.54-1.5h1.66V4.5c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.32H7.5v3.1h2.74v8a10 10 0 0 0 3.26-.05Z" />
    </svg>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talise en Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15 transition-colors"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talise en Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15 transition-colors"
      >
        <FacebookIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

/* Franja de paisaje inspirada en la etiqueta: cerros salmón y agua patagónica */
function LandscapeBand({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={`block w-full h-16 sm:h-24 ${flip ? "rotate-180" : ""}`}
    >
      <rect width="1440" height="120" fill="var(--color-sky)" />
      <path
        d="M0 70 Q 180 30 360 55 T 720 50 T 1080 60 T 1440 45 V 120 H 0 Z"
        fill="var(--color-salmon)"
      />
      <path
        d="M0 85 Q 240 55 480 75 T 960 78 T 1440 70 V 120 H 0 Z"
        fill="var(--color-clay)"
        opacity="0.85"
      />
      <path
        d="M0 98 Q 200 82 400 92 T 800 94 T 1200 90 T 1440 94 V 120 H 0 Z"
        fill="var(--color-lake)"
      />
    </svg>
  );
}

function Header() {
  const links = [
    { href: "#agua", label: "El Agua" },
    { href: "#productos", label: "Productos" },
    { href: "#planta", label: "La Planta" },
    { href: "#distribuidores", label: "Distribuidores" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-mist/90 backdrop-blur border-b border-sky">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-3xl font-light tracking-wide text-navy">
            Talise
          </span>
          <span className="text-[0.55rem] tracking-[0.35em] uppercase text-clay">
            Patagonia Argentina
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-deep">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-clay transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talise en Instagram"
              className="text-deep/50 hover:text-clay transition-colors"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talise en Facebook"
              className="text-deep/50 hover:text-clay transition-colors"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-deep transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Pedí tu agua</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-end">
      {/* Fondo fijo: la imagen queda anclada al viewport y el contenido se desliza encima */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={heroPlanta}
          alt="Planta de envasado Talise rodeada de flores en la estepa patagónica"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-deep/85 via-deep/25 to-navy/30" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-20 pt-40 text-white">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-12">
          <div className="max-w-xl animate-rise">
            <p className="mb-3 font-display italic text-lg sm:text-xl text-sky [text-shadow:0_1px_8px_rgba(13,36,54,0.7)]">
              agua mineral natural de manantial
            </p>
            <h1 className="font-display text-6xl sm:text-8xl font-light tracking-wide [text-shadow:0_2px_16px_rgba(13,36,54,0.65)]">
              Talise
            </h1>
            <p className="mt-2 text-xs sm:text-sm tracking-[0.45em] uppercase text-salmon [text-shadow:0_1px_6px_rgba(13,36,54,0.8)]">
              Patagonia Argentina
            </p>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85">
              Envasada en su fuente de origen, en el corazón de la meseta de
              Chubut. Pura desde el manantial hasta tu mesa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#agua"
                className="rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-deep hover:bg-sky transition-colors"
              >
                Conocé el agua
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                280 453-8788
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3 md:hidden">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Talise en Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Talise en Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ANALISIS = [
  { valor: "7,8", unidad: "pH", detalle: "Alcalino, físicamente equilibrada" },
  { valor: "51", unidad: "mg/l de sodio", detalle: "Agua de bajo sodio" },
  { valor: "282", unidad: "mg/l de sólidos", detalle: "Mineralización débil" },
  { valor: "1,19", unidad: "mg/l de flúor", detalle: "Fluorada naturalmente" },
];

function ElAgua() {
  return (
    <section id="agua" className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-clay">
              El Agua
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-deep">
              La fuerza pura de la meseta patagónica
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep/80">
              El agua mineral Talise es de origen natural y atermal: no se
              utiliza ningún medio mecánico en la captación ni ningún producto
              químico que pueda alterar su pureza. Surge de unas{" "}
              <strong>15 vertientes</strong> en el Establecimiento La Victoria,
              a 30 km de Telsen, provincia del Chubut.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-deep/80">
              De mineralización débil, bajo sodio y pH alcalino, es un agua
              física y químicamente equilibrada, sin cloro, hierro, arsénico ni
              minerales perjudiciales para la salud. Por su composición
              físico-química puede ser catalogada como{" "}
              <strong>una de las mejores aguas del mundo</strong>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-4/5 max-h-130 w-full overflow-hidden rounded-3xl">
              <Image
                src={manantial}
                alt="Vertiente de agua de manantial en el Establecimiento La Victoria"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ANALISIS.map((a, i) => (
            <Reveal key={a.unidad} delay={i * 75} className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-sky">
                <p className="font-display text-4xl font-light text-navy">
                  {a.valor}
                </p>
                <p className="mt-1 text-sm font-semibold text-clay">
                  {a.unidad}
                </p>
                <p className="mt-2 text-xs text-deep/70">{a.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-deep/50">
          Datos del análisis físico-químico: dureza total 102 mg/l · cloruros 28
          mg/l · sulfatos 42 mg/l · bicarbonatos 107 mg/l · nitratos y nitritos
          no detectables · arsénico &lt;0,01 mg/l
        </p>
      </div>
    </section>
  );
}

const PRODUCTOS = [
  {
    nombre: "Botella 600 ml",
    tipo: "Descartable",
    descripcion:
      "Toda la pureza de Talise en un envase cómodo y portátil, para acompañarte e hidratarte durante el día.",
    imagen: botella600,
    posicion: "object-center",
  },
  {
    nombre: "Botella 1,5 L",
    tipo: "Descartable",
    descripcion:
      "La medida justa para tu mesa diaria, con la seguridad de tomar día a día agua pura de manantial.",
    imagen: botella1500,
    posicion: "object-center",
  },
  {
    nombre: "Bidón 6 L",
    tipo: "Descartable",
    descripcion:
      "Pensado para que toda la familia disfrute el agua más pura y natural de la Patagonia. Cien por cien reciclable.",
    imagen: bidon6,
    posicion: "object-center",
  },
  {
    nombre: "Bidón retornable de 12 y 20 litros",
    tipo: "Retornable",
    descripcion:
      "El clásico para hogares, comercios y oficinas: máximo rendimiento con envase retornable.",
    imagen: bidon20,
    posicion: "object-center",
  },
];

function Productos() {
  return (
    <section id="productos" className="bg-sand">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-clay">
            Nuestros Productos
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-deep">
            Un envase para cada momento
          </h2>
          <p className="mt-5 text-lg text-deep/80">
            Envasamos y distribuimos agua mineral natural en cuatro líneas
            independientes de llenado, desde los 600 ml hasta los 20 litros.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTOS.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 100} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sky/70">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${p.posicion}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl font-light text-navy">
                      {p.nombre}
                    </h3>
                    <span className="shrink-0 rounded-full bg-sky px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-deep">
                      {p.tipo}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-deep/75">
                    {p.descripcion}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={dispensers}
                alt="Dispenser común y dispenser frío/calor con bidón Talise de 20 L"
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-salmon">
                Dispensers
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-light">
                Dispensers común y frío/calor
              </h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                Con tu reparto de bidones podés acceder a un{" "}
                <strong className="text-white">dispenser común</strong> o a un{" "}
                <strong className="text-white">dispenser frío/calor</strong>:
                para tu casa, comercio u oficina.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep hover:bg-sky transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultá por tu dispenser
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PLANTA_STATS = [
  { valor: "469", detalle: "hectáreas del Establecimiento La Victoria" },
  { valor: "15", detalle: "vertientes de agua mineral natural" },
  { valor: "+500 m²", detalle: "de nave cubierta, separada en sectores" },
  { valor: "4", detalle: "líneas independientes de llenado" },
];

function LaPlanta() {
  return (
    <section id="planta" className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-last lg:order-first" delay={150}>
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl">
              <Image
                src={plantaExterior}
                alt="Vista de la planta de envasado Talise en la meseta de Chubut"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-clay">
              La Planta
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-deep">
              Envasada en su fuente de origen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep/80">
              Nuestra planta se dedica a la captación y envasado de agua mineral
              de manantial en el Establecimiento La Victoria, a 30 km de Telsen
              y a 200 km de Trelew y Puerto Madryn, en plena Patagonia
              argentina.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-deep/80">
              La nave cuenta con sectores de envasado, fabricación de envases,
              depósito, laboratorio, comedor y vestuarios, garantizando calidad
              y trazabilidad en cada etapa del proceso.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PLANTA_STATS.map((s, i) => (
            <Reveal key={s.detalle} delay={i * 75} className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-sky">
                <p className="font-display text-4xl font-light text-navy">
                  {s.valor}
                </p>
                <p className="mt-2 text-xs text-deep/70">{s.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              img: plantaInterior,
              alt: "Líneas de llenado dentro de la planta Talise",
            },
            {
              img: bidonesStock,
              alt: "Depósito de bidones retornables Talise",
            },
            {
              img: plantaNieve,
              alt: "La planta Talise nevada en invierno",
            },
          ].map((f, i) => (
            <Reveal key={f.alt} delay={i * 100}>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={f.img}
                  alt={f.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Certificaciones />
        </Reveal>
      </div>
    </section>
  );
}

const CERTIFICACIONES = [
  {
    titulo: "Estudio de aforo",
    detalle: "Caudal de las vertientes medido y documentado",
  },
  {
    titulo: "SIFEGA · Producto",
    detalle: "Producto certificado en el sistema federal de alimentos",
  },
  {
    titulo: "SIFEGA · Establecimiento",
    detalle: "Establecimiento certificado y habilitado",
  },
];

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
    </svg>
  );
}

function Certificaciones() {
  return (
    <div className="mt-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sky sm:p-10">
      <h3 className="text-center font-display text-3xl font-light text-deep">
        Calidad certificada
      </h3>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {CERTIFICACIONES.map((c) => (
          <div
            key={c.titulo}
            className="flex flex-col items-center text-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-b from-salmon to-clay text-white shadow-md ring-4 ring-sand">
              <MedalIcon className="h-9 w-9" />
            </span>
            <p className="mt-4 font-display text-xl font-light text-navy">
              {c.titulo}
            </p>
            <p className="mt-1 max-w-52 text-xs text-deep/70">{c.detalle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Distribuidores() {
  return (
    <section id="distribuidores" className="bg-sand">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-clay">
            Distribuidores
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-deep">
            ¿Querés distribuir agua Talise?
          </h2>
          <p className="mt-5 text-lg text-deep/80">
            Sumate a nuestra red de distribución y llevá el agua mineral natural
            de la Patagonia a tu zona. Escribinos y te contamos cómo empezar.
          </p>
          <a
            href={WHATSAPP_DISTRIBUIDORES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-deep transition-colors"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribinos acá
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const ZONAS = [
  "Puerto Madryn",
  "Trelew",
  "Rawson",
  "Playa Unión",
  "Puerto Pirámides",
  "Dolavon",
  "Gaiman",
];

function Contacto() {
  return (
    <section id="contacto" className="bg-deep text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-salmon">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light">
              Llevamos la Patagonia a tu mesa
            </h2>
            <p className="mt-5 max-w-md text-white/75">
              Consultá zonas de reparto, disponibilidad y pedidos. Te
              respondemos por WhatsApp.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-deep hover:bg-sky transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                +54 9 280 453-8788
              </a>
              <p className="text-white/75">
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:info@talise.com.ar"
                  className="underline hover:text-salmon"
                >
                  info@talise.com.ar
                </a>
              </p>
              <p className="text-white/75">
                <span className="font-semibold text-white">Planta:</span>{" "}
                Establecimiento La Victoria, Telsen, Chubut — Patagonia
                Argentina
              </p>
              <SocialLinks className="pt-2" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h3 className="font-display text-2xl font-light text-sky">
              Zonas de reparto
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ZONAS.map((z) => (
                <li
                  key={z}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/85"
                >
                  {z}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-white/50">
              Agua Mineral Natural Talise · Envasada en su fuente de origen por
              Argain Hnos S.R.L.
              <br />
              RNE N.º 07007463 · RNPA N.º 0700641
            </p>
          </Reveal>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-white/45 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Agua Mineral Natural Talise — Patagonia
            Argentina
          </p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talise en Instagram"
              className="hover:text-salmon transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talise en Facebook"
              className="hover:text-salmon transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
          <a
            href="https://devzeppelin.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-salmon transition-colors"
          >
            Desarrollado por DevZeppelin
          </a>
        </div>
      </div>
    </section>
  );
}

/* Datos estructurados para buscadores y asistentes de IA */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organizacion`,
      name: SITE_NAME,
      legalName: "Argain Hnos S.R.L.",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      description:
        "Agua mineral natural de manantial envasada en su fuente de origen, en el Establecimiento La Victoria, Telsen, Chubut, Patagonia Argentina. De mineralización débil, bajo sodio y pH alcalino.",
      email: "info@talise.com.ar",
      telephone: "+5492804538788",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Telsen",
        addressRegion: "Chubut",
        addressCountry: "AR",
      },
      areaServed: ZONAS.map((z) => ({ "@type": "City", name: z })),
      sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+5492804538788",
        availableLanguage: "es",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#organizacion` },
    },
    {
      "@type": "ItemList",
      name: "Productos Talise",
      itemListElement: PRODUCTOS.map((p, i) => ({
        "@type": "Product",
        position: i + 1,
        name: `Agua Mineral Natural Talise — ${p.nombre}`,
        description: p.descripcion,
        image: `${SITE_URL}${p.imagen.src}`,
        brand: { "@type": "Brand", name: "Talise" },
        manufacturer: { "@id": `${SITE_URL}/#organizacion` },
      })),
    },
    {
      "@type": "Service",
      name: "Dispensers",
      description:
        "Con el reparto de bidones Talise se entrega un dispenser común o un dispenser frío/calor, para casas, comercios y oficinas.",
      provider: { "@id": `${SITE_URL}/#organizacion` },
      areaServed: ZONAS.map((z) => ({ "@type": "City", name: z })),
    },
  ],
};

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />
      <Hero />
      <ElAgua />
      <LandscapeBand />
      <Productos />
      <LaPlanta />
      <Distribuidores />
      <LandscapeBand />
      <Contacto />
      <WhatsAppFab />
    </main>
  );
}
