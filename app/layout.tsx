import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheep_Right | Portfolio",
  description: "FrontEnd Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
