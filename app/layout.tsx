import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "날씨돌",
  description: "보고 · 듣고 · 즐기는 날씨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-neutral-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
