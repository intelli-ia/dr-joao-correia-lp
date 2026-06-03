"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const locations = [
  {
    id: "biodiagnostico",
    name: "Clínica Biodiagnóstico",
    street: "Avenida Aziz Maron, 251 — Edifício Boulevard",
    neighborhood: "Bairro Góes Calmon, Itabuna/BA",
    photoSrc: "/clinica-biodiagnostico.webp",
    mapUrl: "https://maps.app.goo.gl/PWzt8N4fKMsM7i9h8",
  },
  {
    id: "oncosul",
    name: "Centro Médico Oncosul",
    street: "Rua Monsenhor Moisés, 174",
    neighborhood: "Bairro Pontalzinho, Itabuna/BA",
    photoSrc: "/clinica-oncosul.webp",
    mapUrl: "https://maps.app.goo.gl/MPnbdyK8nJj6aUSG8",
  },
];

function PhotoPlaceholder() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3"
      style={{
        aspectRatio: "16/9",
        background: "linear-gradient(145deg, rgba(255,255,242,0.05) 0%, rgba(255,255,242,0.02) 100%)",
        border: "1px solid rgba(255,255,242,0.08)",
      }}
    >
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l rounded-tl-2xl" style={{ borderColor: "rgba(228,152,4,0.25)" }} />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r rounded-tr-2xl" style={{ borderColor: "rgba(228,152,4,0.25)" }} />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l rounded-bl-2xl" style={{ borderColor: "rgba(228,152,4,0.25)" }} />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r rounded-br-2xl" style={{ borderColor: "rgba(228,152,4,0.25)" }} />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "rgba(228,152,4,0.1)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E49804" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p className="text-xs font-medium" style={{ color: "rgba(228,152,4,0.5)", fontFamily: "Cairo, sans-serif" }}>
        Foto da clínica
      </p>
    </div>
  );
}


function LocationCard({ location }: { location: typeof locations[0] }) {
  return (
    <div
      className="location-card relative flex flex-col gap-5 rounded-2xl p-6"
      style={{
        background: "rgba(255,255,242,0.04)",
        border: "1px solid rgba(255,255,242,0.08)",
      }}
    >
      {/* Photo area */}
      {location.photoSrc ? (
        <div className="relative -mx-6 -mt-6 rounded-t-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={location.photoSrc}
            alt={location.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="-mx-6 -mt-6">
          <PhotoPlaceholder />
        </div>
      )}

      {/* Info */}
      <div className="flex flex-col gap-0.5">
          <h3
            className="text-base font-bold leading-snug"
            style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
          >
            {location.name}
          </h3>
          <p className="text-sm leading-snug" style={{ color: "rgba(255,255,242,0.65)", fontFamily: "Cairo, sans-serif" }}>
            {location.street}
          </p>
          <p className="text-sm leading-snug" style={{ color: "rgba(255,255,242,0.4)", fontFamily: "Cairo, sans-serif" }}>
            {location.neighborhood}
          </p>
      </div>

      {/* Google Maps CTA */}
      <a
        href={location.mapUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md w-full text-sm font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: "#E49804",
          color: "#E49804",
          backgroundColor: "transparent",
          fontFamily: "Cairo, sans-serif",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Ver no Google Maps
      </a>
    </div>
  );
}

export default function LocationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" style={{ backgroundColor: "#152942" }} className="relative py-24 overflow-hidden">
      <style>{`
        .location-card {
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .location-card:hover {
          background: rgba(255,255,242,0.08) !important;
          border-color: rgba(255,255,242,0.14) !important;
        }
      `}</style>

      {/* Background detail */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 90% 10%, rgba(228,152,4,0.05) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(255,255,242,0.02) 0%, transparent 50%)",
        }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
          >
            Onde{" "}
            <span style={{ color: "#E49804" }}>fico:</span>
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>

        {/* Support text */}
        <p
          className="text-xl text-center mt-14 max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,242,0.5)", fontFamily: "Cairo, sans-serif" }}
        >
          Para confirmar disponibilidade de agenda em cada unidade, entre em contato pelo WhatsApp antes de agendar.
        </p>

      </div>
    </section>
  );
}
