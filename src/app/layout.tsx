import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "História do Curso de Sistemas de Informação - Unifacisa",
  description: "Conheça a história completa do curso de Sistemas de Informação da Unifacisa, desde sua fundação em 2004 até os dias atuais. Uma trajetória de excelência e inovação.",
  keywords: "Unifacisa, Sistemas de Informação, curso, graduação, tecnologia, Campina Grande",
  authors: [{ name: "Unifacisa - Centro Universitário" }],
  openGraph: {
    title: "História do Curso de Sistemas de Informação - Unifacisa",
    description: "Conheça a história completa do curso de Sistemas de Informação da Unifacisa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
