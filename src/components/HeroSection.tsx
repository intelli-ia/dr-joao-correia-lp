"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { trackGenerateLead, trackContactWhatsapp, trackGoogleAdsConversion, trackGoogleAdsContactConversion } from "@/lib/gtag";

const floatingCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Minimamente Invasivo",
    desc: "Recuperação rápida e menos cicatriz",
    position: { top: "3rem", left: 0 },
    mobilePosition: { bottom: "62%", left: "-0.75rem" },
    rotate: "5deg",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "Sem Dor Nenhuma",
    desc: "Colonoscopia e endoscopia com sedação",
    position: { top: "32%", right: 0 },
    mobilePosition: { top: "26%", right: 0 },
    rotate: "-6deg",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.2 5.4-6 7.8-6 12a6 6 0 0 0 12 0c0-4.2-4.8-6.6-6-12z" />
        <path d="M12 12v6" />
      </svg>
    ),
    label: "Tratamento a Laser",
    desc: "Hemorroidas, fissuras e fístulas",
    position: { bottom: "28%", left: 0 },
    mobilePosition: { bottom: "26%", left: "-0.75rem" },
    rotate: "-4deg",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Itabuna e Região",
    desc: "Ilhéus e Itabuna · estrutura completa",
    position: { bottom: "2.5rem", right: 0 },
    mobilePosition: { bottom: "26%", right: 0 },
    rotate: "7deg",
  },
];

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "172px",
  background: "rgba(10, 20, 35, 0.88)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  padding: "14px 16px",
  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
  zIndex: 10,
};

const mobileCardStyle: React.CSSProperties = {
  position: "absolute",
  width: "108px",
  background: "rgba(10, 20, 35, 0.88)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "8px",
  padding: "4px 6px",
  boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
  zIndex: 10,
};

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [contentRef.current, imageRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 180);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative lg:min-h-screen flex flex-col"
      style={{ backgroundColor: "#FFFFF2" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#E49804" }} />

      <main className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-8 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center w-full">

          {/* Left column – text (second on mobile) */}
          <div ref={contentRef} className="flex flex-col gap-3 lg:gap-5 order-2 lg:order-1">
            {/* Logo */}
            <Image
              src="/LOGO 1.svg"
              alt="Dr. João Correia"
              width={639}
              height={214}
              className="h-14 lg:h-20 w-auto self-start"
              priority
            />

            {/* H1 */}
            <h1
              className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight"
              style={{ fontFamily: "Cairo, sans-serif", color: "#152942" }}
            >
              Trato com seriedade o que você{" "}
              <span style={{ color: "#E49804" }}>esconde por vergonha.</span>
            </h1>

            {/* H2 */}
            <h2
              className="text-base sm:text-xl font-medium leading-relaxed max-w-xl"
              style={{ color: "#152942", opacity: 0.75, fontFamily: "Cairo, sans-serif" }}
            >
              Cirurgião coloproctologista em Ilhéus e Itabuna. Procedimentos
              minimamente invasivos para quem quer{" "}
              <span className="font-semibold" style={{ color: "#152942", opacity: 1 }}>
                resolver, não adiar.
              </span>
            </h2>

            {/* Support text */}
            <p
              className="text-sm lg:text-base leading-relaxed max-w-lg"
              style={{ color: "#152942", opacity: 0.6, fontFamily: "Cairo, sans-serif" }}
            >
              Sangramento ao evacuar, dor que volta sempre, diagnóstico que você
              está adiando, esses problemas não somem sozinhos. Mas têm
              tratamento, e a maioria resolve sem grandes cirurgias nem
              internações longas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="https://wa.me/5573988146281?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackGenerateLead(); trackGoogleAdsConversion(); }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-md text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  backgroundColor: "#E49804",
                  color: "#FFFFF2",
                  fontFamily: "Cairo, sans-serif",
                  boxShadow: "0 4px 20px rgba(228, 152, 4, 0.35)",
                }}
              >
                <span>➜</span>
                Agendar Consulta
              </a>
              <a
                href="https://wa.me/5573988146281?text=Olá%2C%20gostaria%20de%20tirar%20algumas%20dúvidas."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackContactWhatsapp(); trackGoogleAdsContactConversion(); }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-md text-sm font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#152942] hover:text-[#FFFFF2]"
                style={{
                  borderColor: "#152942",
                  color: "#152942",
                  fontFamily: "Cairo, sans-serif",
                  backgroundColor: "transparent",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.054 23.454a.5.5 0 0 0 .492.593.499.499 0 0 0 .092-.009l5.7-1.494A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 0 1-5.031-1.389l-.36-.214-3.733.979.997-3.648-.235-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Quero tirar dúvidas
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-1">
              {[
                { value: "+10", label: "Anos de experiência" },
                { value: "Diversos", label: "Casos solucionados" },
                { value: "Itabuna", label: "e Região" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-base lg:text-xl font-bold"
                    style={{ color: "#E49804", fontFamily: "Cairo, sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] lg:text-xs"
                    style={{ color: "#152942", opacity: 0.55, fontFamily: "Cairo, sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – photo + floating cards (first on mobile) */}
          <div ref={imageRef} className="order-1 lg:order-2">

            {/* Desktop layout */}
            <div className="relative hidden lg:block" style={{ padding: "2.5rem 3.5rem" }}>
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "3/4", boxShadow: "0 24px 64px rgba(21,41,66,0.22)" }}
              >
                <Image
                  src="/dr-joao-hero.webp"
                  alt="Dr. João Correia – Cirurgião Coloproctologista"
                  fill priority
                  className="object-cover"
                  style={{ transform: "scale(1.12) translateX(0%) translateY(4%)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.75) 0%, rgba(10,20,35,0.1) 45%, transparent 100%)" }} />
                <div
                  className="absolute bottom-5 left-5 right-5 rounded-2xl p-4"
                  style={{ background: "rgba(10,20,35,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-sm font-bold" style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}>Dr. João Correia</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(228,152,4,0.85)", fontFamily: "Cairo, sans-serif" }}>CRM · Cirurgião Coloproctologista</p>
                </div>
              </div>
              {floatingCards.map((card, i) => (
                <div key={i} style={{ ...cardStyle, ...card.position, transform: `rotate(${card.rotate})` }}>
                  <div className="w-8 h-8 rounded-md flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(228,152,4,0.15)", color: "#E49804" }}>
                    {card.icon}
                  </div>
                  <p className="font-bold leading-snug" style={{ color: "#FFFFF2", fontSize: "13px", fontFamily: "Cairo, sans-serif" }}>{card.label}</p>
                  <p className="mt-1 leading-snug" style={{ color: "rgba(255,255,242,0.5)", fontSize: "12.5px", fontFamily: "Cairo, sans-serif" }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile layout — floating cards over image */}
            <div className="lg:hidden flex justify-center" style={{ paddingLeft: "1rem" }}>
            <div className="relative w-full" style={{ maxWidth: "340px", padding: "1.5rem 0.75rem" }}>
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "3/4", maxHeight: "360px", boxShadow: "0 16px 48px rgba(21,41,66,0.2)" }}
              >
                <Image
                  src="/dr-joao-hero.webp"
                  alt="Dr. João Correia – Cirurgião Coloproctologista"
                  fill
                  className="object-cover"
                  style={{ transform: "scale(1.12) translateX(0%) translateY(4%)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.75) 0%, rgba(10,20,35,0.1) 45%, transparent 100%)" }} />
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-md p-3"
                  style={{ background: "rgba(10,20,35,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-sm font-bold" style={{ color: "#FFFFF2", fontFamily: "Cairo, sans-serif" }}>Dr. João Correia</p>
                  <p className="text-xs" style={{ color: "rgba(228,152,4,0.85)", fontFamily: "Cairo, sans-serif" }}>CRM · Cirurgião Coloproctologista</p>
                </div>
              </div>

              {floatingCards.map((card, i) => (
                <div key={i} style={{ ...mobileCardStyle, ...card.mobilePosition, transform: `rotate(${card.rotate})` }}>
                  <p className="font-bold leading-snug" style={{ color: "#FFFFF2", fontSize: "9.5px", fontFamily: "Cairo, sans-serif" }}>{card.label}</p>
                  <p className="leading-snug" style={{ color: "rgba(255,255,242,0.5)", fontSize: "9.5px", fontFamily: "Cairo, sans-serif" }}>{card.desc}</p>
                </div>
              ))}
            </div>
            </div>

          </div>
        </div>
      </main>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(21,41,66,0.12), transparent)" }} />
    </section>
  );
}
