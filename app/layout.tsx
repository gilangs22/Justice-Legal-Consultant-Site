import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Justice Legal Consultant | Konsultan Legalitas & Hukum",
  description:
    "Justice Legal Consultant membantu pengurusan sertipikat, PBB, perizinan usaha, PBG, SLF, NIB, PT/CV, dan konsultasi hukum untuk Jawa Timur dan luar Jawa Timur.",
  keywords: [
    "Justice Legal Consultant",
    "JLC",
    "konsultan hukum Sidoarjo",
    "legalitas usaha",
    "pengurusan sertipikat",
    "PBG",
    "SLF",
    "NIB",
    "pendirian PT CV"
  ],
  openGraph: {
    title: "Justice Legal Consultant",
    description:
      "Konsultan legalitas dan hukum dengan pengalaman 10+ tahun untuk properti, PBB, perizinan, dan badan usaha.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
