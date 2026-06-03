"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "Colonoscopia dói?",
    a: "Não. O exame é feito com sedação. Você dorme, não sente nada e acorda com o resultado já explicado.",
  },
  {
    q: "Preciso de encaminhamento para consultar?",
    a: "Não. O agendamento é direto pelo WhatsApp, sem guia médico nem encaminhamento prévio.",
  },
  {
    q: "Atende plano de saúde?",
    a: "Atende alguns convênios. Para confirmar se o seu plano está na lista, entre em contato pelo WhatsApp antes de agendar.",
  },
  {
    q: "Tenho indicação de cirurgia da vesícula. Posso marcar direto?",
    a: "Sim. Traga seus exames na consulta e avaliamos juntos o melhor momento e técnica para o procedimento.",
  },
  {
    q: "Quais cirurgias são feitas por videolaparoscopia?",
    a: "Vesícula, hérnias e a maioria das cirurgias intestinais — com recuperação mais rápida e menos dor do que na cirurgia aberta convencional.",
  },
  {
    q: "Sangramento ou fissura sempre resulta em cirurgia?",
    a: "Não. A maioria dos casos se resolve com tratamento clínico. A cirurgia é indicada só quando realmente necessário, e isso é avaliado com cuidado na consulta.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen
          ? "rgba(255,255,242,0.07)"
          : "rgba(255,255,242,0.04)",
        border: isOpen
          ? "1px solid rgba(228,152,4,0.25)"
          : "1px solid rgba(255,255,242,0.07)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold leading-snug"
          style={{
            color: isOpen ? "#FFFFF2" : "rgba(255,255,242,0.85)",
            fontFamily: "Cairo, sans-serif",
            transition: "color 0.2s ease",
          }}
        >
          {question}
        </span>

        {/* Icon */}
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isOpen
              ? "rgba(228,152,4,0.2)"
              : "rgba(255,255,242,0.06)",
            border: isOpen
              ? "1px solid rgba(228,152,4,0.4)"
              : "1px solid rgba(255,255,242,0.1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6 1v10M1 6h10"
              stroke={isOpen ? "#E49804" : "rgba(255,255,242,0.6)"}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <div
            className="h-px w-full mb-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(228,152,4,0.3), transparent)",
            }}
          />
          <p
            className="text-base leading-relaxed"
            style={{
              color: "rgba(255,255,242,0.65)",
              fontFamily: "Cairo, sans-serif",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      style={{ backgroundColor: "#152942" }}
      className="relative py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 100% 50%, rgba(228,152,4,0.05) 0%, transparent 55%)",
        }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}
              >
                Perguntas{" "}
                <span style={{ color: "#E49804" }}>frequentes</span>
              </h2>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(255,255,242,0.5)",
                fontFamily: "Cairo, sans-serif",
                maxWidth: "480px",
              }}
            >
              As dúvidas mais comuns de quem está pensando<br />em consultar, fazer exames ou realizar um procedimento.
            </p>

          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                index={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
