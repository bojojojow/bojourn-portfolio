
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bojourn Franco | Digital Operations & Virtual Assistant",
  description:
    "Portfolio of Bojourn Franco, specializing in Excel reporting, WordPress website operations, digital marketing, and virtual assistance.",
  keywords: [
    "Bojourn Franco",
    "Virtual Assistant",
    "Digital Operations",
    "Excel Reporting",
    "WordPress",
    "Digital Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
