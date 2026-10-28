import { createFileRoute } from "@tanstack/react-router";
import { CalendarHeart, Clock, MapPin, Gift, ShoppingBag, MessageCircleHeart } from "lucide-react";
import hero from "@/assets/hero-dino.jpg";
import stego from "@/assets/dino-stego.png";
import trex from "@/assets/dino-trex.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baby Shower de Miri y Jorge 🦕" },
      { name: "description", content: "Acompáñanos a celebrar la llegada de nuestro bebé el 28 de noviembre a las 2:00 PM." },
      { property: "og:title", content: "Baby Shower de Miri y Jorge" },
      { property: "og:description", content: "28 de noviembre · 2:00 PM. ¡Te esperamos!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btn =
  "flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-base font-semibold shadow-soft transition-all duration-300 hover:scale-[1.03] active:scale-95";

function Footprints() {
  return (
    <div className="flex justify-center gap-6 text-primary/40" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 40 40" className={`h-6 w-6 ${i % 2 ? "translate-y-3 -rotate-12" : "rotate-12"}`} fill="currentColor">
          <ellipse cx="20" cy="26" rx="9" ry="10" />
          <ellipse cx="9" cy="11" rx="3.5" ry="5.5" transform="rotate(-25 9 11)" />
          <ellipse cx="20" cy="7" rx="3.5" ry="5.5" />
          <ellipse cx="31" cy="11" rx="3.5" ry="5.5" transform="rotate(25 31 11)" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-8 px-5 py-8">
      <section className="overflow-hidden rounded-[2rem] bg-card shadow-soft">
        <div className="relative">
          <img src={hero} alt="Dinosaurio bebé saliendo de su huevo" className="w-full" />
          <div className="absolute top-[27%] left-[8%] w-[50%] text-center [container-type:inline-size]">
            <p className="text-[5.5cqw] leading-snug tracking-[0.2em] text-muted-foreground">¡UNA GRAN AVENTURA<br />ESTÁ POR COMENZAR!</p>
            <h1 className="mt-[2cqw] font-athelas text-[17cqw] leading-none text-foreground">Baby Shower</h1>
          </div>
        </div>
        <p className="p-7 text-center leading-relaxed text-muted-foreground">
          Con muchísima ilusión esperamos la llegada de nuestro pequeño y queremos compartir contigo la alegría de
          esta nueva aventura. Tu cariño y compañía harán aún más especial este momento en nuestras vidas 💚
        </p>
      </section>

      <section className="rounded-[2rem] bg-card p-7 pt-10 pb-8 text-center shadow-soft">
        <img src={trex} alt="" className="float absolute -top-12 -right-3 w-24" />
        <h2 className="mb-6 font-athelas text-4xl text-primary">Fecha y Hora</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl border border-border/60 bg-background/60 px-3 py-6">
            <CalendarHeart className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
            <p className="mt-4 text-sm tracking-[0.25em] text-primary">FECHA</p>
            <p className="mt-2 font-serif text-xl leading-snug text-foreground sm:text-2xl">
              Sábado
              <br />28 de noviembre
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/60 px-3 py-6">
            <Clock className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
            <p className="mt-4 text-sm tracking-[0.25em] text-primary">HORA</p>
            <p className="mt-2 font-serif text-xl leading-snug text-foreground sm:text-2xl">
              2:00 PM
              <br />
              <span className="text-lg text-muted-foreground sm:text-xl">En punto</span>
            </p>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/4CZrDweUNYttZMgSA?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} mt-6 bg-primary text-primary-foreground hover:bg-foreground`}
        >
          <MapPin /> Ver Ubicación del Salón
        </a>
      </section>


      <section className="rounded-[2rem] bg-card p-7 text-center shadow-soft">
        <h2 className="font-athelas text-4xl text-primary">Mesa de Regalos</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          El mejor regalo será contar con tu presencia y compartir contigo este momento tan especial. Pero si deseas
          tener un detalle para nuestro bebé, ¡será recibido con muchísimo cariño! Puedes elegir algo de nuestras
          mesas de regalos o, si lo prefieres, traer tu regalito el día del baby shower.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/60064999"
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} bg-blush text-blush-foreground hover:brightness-95`}
          >
            <Gift /> Mesa de Regalos Liverpool
          </a>
          <a
            href="https://www.amazon.com.mx/baby-reg/miriamalejandra-alvarezaguilar-jorge-delgado-noviembre-2026-elmarques/3G6SVKLDTPDAO?ref_=cm_sw_r_apin_dp_R8BQ0E34MJ5T7RYP2YBM&language=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} bg-foreground text-primary-foreground hover:bg-primary`}
          >
            <ShoppingBag /> Mesa de Regalos Amazon
          </a>
        </div>
      </section>

      <section className="relative rounded-[2rem] bg-card p-7 pt-10 text-center shadow-soft">
        <img src={stego} alt="" className="float absolute -top-10 -left-3 w-20" />
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-secondary p-3">
            <MessageCircleHeart className="h-6 w-6 text-primary" />
          </span>
        </div>
        <h2 className="font-athelas text-4xl text-primary">Confirma tu Asistencia</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          ¡Nos encantaría que estés ahí! Confírmanos tu asistencia mandándonos un mensaje de WhatsApp.
        </p>
        <a
          href="https://wa.me/524421555828?text=Hola%20Miry%20y%20Jorge%2C%20confirmo%20mi%20asistencia%20a%20su%20Baby%20Shower."
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} mt-6 bg-primary text-primary-foreground hover:bg-foreground`}
        >
          <MessageCircleHeart /> Confirmar Asistencia
        </a>
      </section>

      <footer className="flex flex-col items-center gap-3 pb-6 text-center">

        <img src={stego} alt="" className="float w-36" />
        <p className="text-muted-foreground">¡Te esperamos! Nos encantará celebrar contigo la llegada de nuestro bebé.</p>
        <p className="font-athelas text-3xl italic text-primary">Con cariño,</p>
        <p className="font-athelas text-5xl text-foreground">Miri y Jorge</p>
        <div className="mt-6"><Footprints /></div>
      </footer>
    </main>
  );
}
