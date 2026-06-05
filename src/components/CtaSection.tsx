"use client";

import { useRef, useEffect } from "react";
import { trackGenerateLead, trackContactWhatsapp } from "@/lib/gtag";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contato"
      style={{ backgroundColor: "#FFFFF2" }}
      className="relative py-32 overflow-hidden"
    >
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-8 flex flex-col items-center text-center gap-10"
      >
        {/* H1 */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          style={{ color: "#152942", fontFamily: "Cairo, sans-serif" }}
        >
          O primeiro passo é o mais difícil.<br /><span style={{ color: "#E49804" }}>A gente sabe disso.</span>
        </h2>

        {/* Body text */}
        <div className="flex flex-col gap-4 max-w-xl">
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(21,41,66,0.65)", fontFamily: "Cairo, sans-serif" }}
          >
            Ignorar o sintoma não faz ele desaparecer, só adia o tratamento e
            às vezes complica o que seria simples de resolver.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(21,41,66,0.65)", fontFamily: "Cairo, sans-serif" }}
          >
            Se você já está aqui, provavelmente já sabe que é hora de cuidar.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
          {/* Primary */}
          <a
            href="https://wa.me/5573988146281?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackGenerateLead}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:px-8 sm:py-4 rounded-md text-sm sm:text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            style={{
              backgroundColor: "#E49804",
              color: "#152942",
              fontFamily: "Cairo, sans-serif",
              boxShadow: "0 6px 28px rgba(228,152,4,0.35)",
            }}
          >
            Agendar sua Consulta Agora
          </a>

          {/* Secondary */}
          <a
            href="https://wa.me/5573988146281?text=Olá%2C%20gostaria%20de%20tirar%20algumas%20dúvidas."
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContactWhatsapp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 rounded-md text-sm sm:text-base font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "rgba(21,41,66,0.2)",
              color: "rgba(21,41,66,0.65)",
              fontFamily: "Cairo, sans-serif",
              backgroundColor: "transparent",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Tirar sua dúvida pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
