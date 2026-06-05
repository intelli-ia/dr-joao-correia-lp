import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. João Correia – Cirurgião Coloproctologista em Ilhéus e Itabuna",
  description:
    "Tratamento especializado em coloproctologia com procedimentos minimamente invasivos. Atendimento em Ilhéus e Itabuna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cairo.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LP1LYFWW62"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LP1LYFWW62');
            gtag('config', 'AW-17439844928');
          `}
        </Script>
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
