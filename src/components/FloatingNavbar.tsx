"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.08),
      { threshold: [0, 0.08] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contato");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <nav
        className="flex items-center justify-between w-full max-w-3xl px-5 py-2.5"
        style={{
          background: "rgba(18, 32, 52, 0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,242,0.09)",
          borderRadius: "999px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,242,0.04)",
        }}
      >
        {/* Logo */}
        <Image
          src="/LOGO 2.svg"
          alt="Dr. João Correia"
          width={198}
          height={155}
          className="h-8 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* CTA */}
        <a
          href="https://wa.me/5573988146281?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2 rounded-md text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
          style={{
            backgroundColor: "#E49804",
            color: "#152942",
            fontFamily: "Cairo, sans-serif",
          }}
        >
          Agendar Consulta
        </a>
      </nav>
    </div>
  );
}
