import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenTA: Reimagining Art Through Tech",
  description: "An innovative platform highlighting rising artists from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
