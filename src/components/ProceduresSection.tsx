"use client";

import { useRef, useEffect, type ReactNode } from "react";

function MobileScrollCards({ items }: { items: { icon: ReactNode; title: string; desc: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          el.style.transform = entry.isIntersecting ? "scale(1)" : "scale(0.88)";
          el.style.opacity = entry.isIntersecting ? "1" : "0.6";
        });
      },
      { root: container, threshold: 0.65 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:hidden flex overflow-x-auto gap-4 pb-4 -mx-8 pl-16 pr-8"
      style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
    >
      {/* TextBlock como primeiro item */}
      <div
        ref={(el) => { cardRefs.current[items.length] = el; }}
        className="flex-none"
        style={{
          width: "72vw",
          scrollSnapAlign: "start",
          transform: "scale(0.88)",
          opacity: 0.6,
          transition: "transform 0.35s ease, opacity 0.35s ease",
        }}
      >
        <TextBlock />
      </div>

      {items.map((p, i) => (
        <div
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="flex-none"
          style={{
            width: "72vw",
            scrollSnapAlign: "start",
            transform: "scale(0.88)",
            opacity: 0.6,
            transition: "transform 0.35s ease, opacity 0.35s ease",
          }}
        >
          <ProcedureCard {...p} />
        </div>
      ))}
    </div>
  );
}

const procedures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11c0-1.7 1.3-3 3-3" />
        <path d="M11 16c2.8 0 5-2.2 5-5" />
      </svg>
    ),
    title: "Colonoscopia",
    desc: "Exame completo do intestino grosso com sedação. Indicado para rastreamento de câncer colorretal, sangramento e doenças inflamatórias intestinais.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 9c0-3.5-2.7-6-7-6S5 5.5 5 9c0 1.5.4 3 1 4.5L7 19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-5.5c.6-1.5 1-3 1-4.5z" />
        <path d="M9 9c0 1.7 1.3 3 3 3" />
      </svg>
    ),
    title: "Endoscopia digestiva alta",
    desc: "Avalia esôfago, estômago e duodeno. Identifica úlceras, gastrites e alterações que causam sintomas persistentes sem causa aparente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
        <circle cx="6" cy="12" r="1.5" />
      </svg>
    ),
    title: "Cirurgias por videolaparoscopia",
    desc: "Operações com pequenas incisões e câmera. Menos dor no pós-operatório, cicatriz menor e recuperação mais rápida.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    ),
    title: "Cirurgia da vesícula biliar",
    desc: "Retirada da vesícula por videolaparoscopia, com alta hospitalar geralmente no dia seguinte ao procedimento.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6" />
        <path d="M9 10V8a3 3 0 0 1 6 0v2" />
        <path d="M8 20h8M12 14v4" />
      </svg>
    ),
    title: "Cirurgias de hérnia",
    desc: "Correção de hérnias umbilicais e inguinais com técnica minimamente invasiva, focando em resultado duradouro e conforto na recuperação.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Tratamento com laser",
    desc: "Tecnologia de precisão para hemorroidas e fístulas — menos dor, menos sangramento e cicatrização mais rápida.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Hemorroidas, fissuras e fístulas",
    desc: "Para casos que não respondem ao tratamento clínico. Procedimento indicado com critério e pós-operatório acompanhado de perto.",
  },
];

function ProcedureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div
      className="relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 cursor-default overflow-hidden"
      style={{
        backgroundColor: "#152942",
        border: "1px solid rgba(255,255,242,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-5px)";
        el.style.borderColor = "rgba(228,152,4,0.35)";
        el.style.boxShadow = "0 20px 48px rgba(21,41,66,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,242,0.07)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(228,152,4,0.12)", color: "#E49804" }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="text-base font-bold leading-snug"
          style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,242,0.55)", fontFamily: "Cairo, sans-serif" }}
        >
          {desc}
        </p>
      </div>
      <div
        className="absolute bottom-0 left-6 right-6 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(228,152,4,0.18), transparent)" }}
      />
    </div>
  );
}

function TextBlock() {
  return (
    <div
      className="relative flex flex-col justify-between rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-default"
      style={{ backgroundColor: "#E49804", border: "1px solid transparent" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-5px)";
        el.style.borderColor = "rgba(21,41,66,0.35)";
        el.style.boxShadow = "0 20px 48px rgba(21,41,66,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "transparent";
        el.style.boxShadow = "none";
      }}
    >
      {/* Navy top bar */}
      <div className="w-10 h-0.5 rounded mb-6" style={{ backgroundColor: "#152942" }} />

      <p
        className="text-lg font-bold leading-relaxed flex-1"
        style={{ color: "#152942", fontFamily: "Cairo, sans-serif" }}
      >
        Da consulta ao procedimento, tudo em um só lugar: diagnóstico, exame e cirurgia quando necessário.
      </p>

      {/* Decorative large quote mark */}
      <div
        className="absolute bottom-3 right-5 text-8xl leading-none select-none pointer-events-none font-serif"
        style={{ color: "rgba(21,41,66,0.1)", fontFamily: "Georgia, serif" }}
      >
        "
      </div>
    </div>
  );
}

export default function ProceduresSection() {
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
    <section id="procedimentos" style={{ backgroundColor: "#FFFFF2" }} className="relative py-24 overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(228,152,4,0.04) 0%, transparent 50%)",
        }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Header — only H1, centered */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#152942", fontFamily: "Cairo, sans-serif" }}
          >
            O que o Dr. João Correia{" "}
            <span style={{ color: "#E49804" }}>trata e opera</span>
          </h2>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 items-stretch">
          <TextBlock />
          {procedures.map((p, i) => (
            <ProcedureCard key={i} {...p} />
          ))}
        </div>

        {/* Mobile: horizontal scroll with scale effect */}
        <MobileScrollCards items={procedures} />

      </div>
    </section>
  );
}
