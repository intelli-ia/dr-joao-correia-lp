"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [photoRef.current, contentRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <section
      id="medico"
      style={{ backgroundColor: "#FFFFF2" }}
      className="relative py-24 overflow-hidden"
    >
      {/* Subtle background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 5% 80%, rgba(228,152,4,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left — photo */}
          <div ref={photoRef} className="flex justify-end">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: "460px",
                maxWidth: "100%",
                aspectRatio: "3/4",
                boxShadow: "0 32px 80px rgba(21,41,66,0.14)",
              }}
            >
              {/* Desktop */}
              <Image
                src="/dr-joao-correia.webp"
                alt="Dr. João Correia"
                fill
                className="object-cover hidden lg:block"
                style={{ transform: "scale(1.12) translateX(-5%) translateY(4%)" }}
              />
              {/* Mobile */}
              <Image
                src="/dr-joao-about-mobile.webp"
                alt="Dr. João Correia"
                fill
                className="object-cover lg:hidden"
              />
              {/* Bottom gradient for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(21,41,66,0.18) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div ref={contentRef} className="flex flex-col gap-8">

            {/* Name + credentials */}
            <div className="flex flex-col gap-2">
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight"
                style={{ color: "#152942", fontFamily: "Cairo, sans-serif" }}
              >
                Dr. João Correia
              </h2>
              <p
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#E49804", fontFamily: "Cairo, sans-serif" }}
              >
                CRM BA 30177 &nbsp;|&nbsp; RQE 24398 &nbsp;|&nbsp; RQE 23030
              </p>
            </div>

            {/* Body text */}
            <div className="flex flex-col gap-5">
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(21,41,66,0.72)",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                Nasceu e cresceu em Itabuna, se formou na UESC e foi para a
                capital aprofundar a especialização, mas voltou para o sul da
                Bahia. Porque é aqui que está o paciente que ele quer atender.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(21,41,66,0.72)",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                Com formação em cirurgia geral e especialização em
                coloproctologia, atende quem tem vergonha de falar sobre os
                próprios sintomas, quem adiou a consulta por anos e quem
                recebeu um diagnóstico sério e não sabe por onde começar.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(21,41,66,0.72)",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                O atendimento é direto: você conta o que está sentindo, ele
                examina, explica o que encontrou e indica o caminho, sem
                enrolação, sem cirurgia desnecessária.
              </p>
            </div>

            {/* Highlighted quote */}
            <blockquote className="relative py-1">
              {/* Large decorative quote mark */}
              <span
                className="absolute -top-4 -left-1 text-6xl leading-none select-none pointer-events-none font-serif"
                style={{
                  color: "rgba(228,152,4,0.18)",
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </span>
              <p
                className="text-lg font-semibold leading-relaxed"
                style={{
                  color: "#152942",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                Minha missão é tratar com verdade o que muitos preferem
                ignorar.
              </p>
            </blockquote>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
