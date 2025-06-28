import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/layouts";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fernando Luppo | Desenvolvedor Full Stack - Sites e Apps Mobile",
  description:
    "Desenvolvedor Full Stack especializado em Next.js, React Native e Node.js. Crio sites e aplicativos mobile de alta performance com soluções personalizadas. Transforme sua ideia em um produto digital!",
  keywords: [
    "desenvolvedor full stack",
    "criação de sites",
    "aplicativos mobile",
    "Next.js",
    "React Native",
    "Node.js",
    "desenvolvimento web",
    "desenvolvimento mobile",
    "programador freelancer",
    "desenvolvimento performance",
  ],
  authors: [{ name: "Fernando Luppo", url: "https://seusite.com" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com",
    title: "Fernando Luppo | Desenvolvedor Full Stack - Sites e Apps Mobile",
    description:
      "Soluções completas em desenvolvimento web e mobile com alta performance",
    images: [
      {
        url: "https://seusite.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fernando Luppo - Desenvolvedor Full Stack",
      },
    ],
    siteName: "Fernando Luppo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Luppo | Desenvolvedor Full Stack",
    description:
      "Especialista em Next.js, React Native e Node.js para sites e apps mobile",
    images: ["https://seusite.com/images/twitter-card.jpg"],
  },
  metadataBase: new URL("https://seusite.com"),
  alternates: {
    canonical: "https://seusite.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
