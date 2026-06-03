"use client";

const testimonials = [
  {
    name: "Robson Correa da Silva",
    text: "Excelente profissional — tira todas as dúvidas e isso nos deixa mais confiantes para a cirurgia. Resumindo: além de médico, é humano.",
  },
  {
    name: "Jackson Santos de Aquino",
    text: "Excelente médico. Saí do consultório satisfeito com o atendimento, os detalhes e as soluções. Pontual, gentil e realmente se preocupa com seus pacientes.",
  },
  {
    name: "Marcus Sales",
    text: "Muito atencioso e bem explicativo! Meus parabéns pelo profissional que é!",
  },
  {
    name: "Claudia Lisboa",
    text: "Excelente atendimento, muito atencioso. Tirou todas as minhas dúvidas.",
  },
  {
    name: "Silvio Trevilato",
    text: "Muito atencioso, pontual, esclarecedor, prestativo e muito simpático.",
  },
  {
    name: "Luis Carlos",
    text: "O médico prestou atenção e tirou todas as minhas dúvidas durante o atendimento.",
  },
  {
    name: "ACNP",
    text: "Atendimento de excelência do início ao fim. Nos deixa completamente à vontade.",
  },
];

function getInitial(name: string) {
  return name.trim()[0].toUpperCase();
}

function TestimonialCard({ t }: { t: { name: string; text: string } }) {
  return (
    <div
      className="flex-none rounded-2xl p-6 flex flex-col justify-between"
      style={{
        width: "320px",
        minHeight: "190px",
        background: "rgba(255,255,242,0.04)",
        border: "1px solid rgba(255,255,242,0.08)",
      }}
    >
      <p
        className="text-base leading-relaxed"
        style={{ color: "rgba(255,255,242,0.78)", fontFamily: "Cairo, sans-serif" }}
      >
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 mt-5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
          style={{ backgroundColor: "rgba(228,152,4,0.18)", color: "#E49804", fontFamily: "Cairo, sans-serif" }}
        >
          {getInitial(t.name)}
        </div>
        <p
          className="text-sm font-semibold"
          style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
        >
          {t.name}
        </p>
      </div>
    </div>
  );
}

// Duplicar para loop perfeito
const looped = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" style={{ backgroundColor: "#152942" }} className="relative overflow-hidden py-24">

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
        .marquee-track-reverse {
          animation: marquee-reverse 32s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 60%, rgba(228,152,4,0.05) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(255,255,242,0.02) 0%, transparent 50%)",
        }}
      />

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to right, #152942, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to left, #152942, transparent)" }}
      />

      <div className="relative z-10">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
          >
            Quem já passou<br />por aqui{" "}
            <span style={{ color: "#E49804" }}>conta.</span>
          </h2>
        </div>

        {/* Marquee → esquerda */}
        <div className="overflow-hidden">
          <div className="marquee-track flex" style={{ gap: "1.25rem", width: "max-content" }}>
            {looped.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Marquee → direita */}
        <div className="overflow-hidden mt-5">
          <div className="marquee-track-reverse flex" style={{ gap: "1.25rem", width: "max-content" }}>
            {looped.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
