declare function gtag(...args: unknown[]): void;

export function trackGenerateLead() {
  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead", {
      event_category: "whatsapp",
      event_label: "agendar_consulta",
    });
  }
}

export function trackContactWhatsapp() {
  if (typeof gtag !== "undefined") {
    gtag("event", "contact_whatsapp", {
      event_category: "whatsapp",
      event_label: "tirar_duvidas",
    });
  }
}
