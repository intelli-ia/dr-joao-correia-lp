import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. João Correia – Cirurgião Geral e Coloproctologista em Ilhéus e Itabuna",
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
<body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
