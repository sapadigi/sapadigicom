import type { Metadata } from "next";
import "./globals.css";
import RootProvider from "./providers/root-provider";

export const metadata: Metadata = {
  title:
    "Sapadigi Digital Agency - Buka Pintu ke Dunia Digital dengan Cara yang Manusiawi",
  description:
    "Solusi digital yang mudah dipahami untuk semua orang. Tools gratis, panduan lokal, dan transformasi digital yang manusiawi untuk UMKM, mahasiswa, dan freelancer Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="font-body bg-background">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
