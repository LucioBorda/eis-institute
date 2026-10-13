import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#001A4D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eisinstitute.com.ar"),
  title: "EIS Institute | Cultural Inglesa de Ensenada - 30 Años de Trayectoria",
  description:
    "Educación de excelencia en inglés en Ensenada para niños, adolescentes y adultos. Exámenes internacionales Anglia ESOL Examinations, aval oficial de UTN y vinculación con Chichester College.",
  keywords: [
    "ingles ensenada",
    "instituto ingles ensenada",
    "cultural inglesa ensenada",
    "anglia esol ensenada",
    "cursos de ingles ensenada",
    "eis institute ensenada",
    "aprender ingles ensenada",
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
      "Educación de excelencia en inglés para todas las edades. 30 años formando futuros bilingües con aval UTN y certificaciones Anglia ESOL.",
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
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#001A4D] font-sans selection:bg-[#00205B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
