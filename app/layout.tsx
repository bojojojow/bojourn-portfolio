
import type { Metadata } from "next";
import "./globals.css";


export const metadata = {
  title: "Bojourn Franco",
  description:
    "Bojourn Franco — Virtual Assistant specializing in executive support, Excel reporting, WordPress management, and digital operations.",
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
