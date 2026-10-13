import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eisinstitute.com.ar"),
  title: "EIS Institute | Cultural Inglesa de Ensenada - 30 Años de Trayectoria",
  description:
    "Educación de excelencia en inglés en Ensenada. Cursos para niños, adolescentes y adultos. Exámenes internacionales de Anglia ESOL Examinations, aval oficial de UTN y vinculación con Chichester College.",
  keywords: [
    "ingles ensenada",
    "instituto ingles ensenada",
    "cultural inglesa ensenada",
    "anglia esol ensenada",
    "cursos de ingles ensenada",
    "eis institute ensenada",
    "aprender ingles ensenada la plata",
    "examen nivelatorio ingles"
  ],
  authors: [{ name: "EIS Institute" }],
  creator: "EIS Institute",
  publisher: "EIS Institute",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "EIS Institute | Cultural Inglesa de Ensenada",
    description:
      "Invertí en el futuro de tus hijos con educación de excelencia en inglés. 30 años formando futuros bilingües con aval UTN y certificaciones Anglia ESOL.",
    url: "https://eisinstitute.com.ar",
    siteName: "EIS Institute",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/instituto-frente.jpg",
        width: 1200,
        height: 630,
        alt: "EIS Institute - Cultural Inglesa de Ensenada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIS Institute | Cultural Inglesa de Ensenada",
    description:
      "Aprender inglés en Ensenada con certificación internacional británica y aval oficial UTN.",
    images: ["/images/instituto-frente.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
