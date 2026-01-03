import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TonAgentIA - Agents IA sur mesure pour coachs, consultants et SaaS",
  description: "Plus de clients. Plus de temps. Plus de marge. Des agents IA sur mesure pour automatiser ton acquisition, tes opérations et ton admin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
