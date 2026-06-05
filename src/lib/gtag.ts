declare function gtag(...args: unknown[]): void;

export function trackGenerateLead() {
  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead", {
      event_category: "whatsapp",
      event_label: "agendar_consulta",
    });
  }
}

export function trackGoogleAdsConversion() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", {
      send_to: "AW-17439844928/vgGFCKLNyLkcEMDU-_tA",
      value: 1.0,
      currency: "BRL",
    });
  }
}

export function trackGoogleAdsContactConversion() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", {
      send_to: "AW-17439844928/-9L_CIb-tLkcEMDU-_tA",
      value: 1.0,
      currency: "BRL",
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
