import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innokit | Kitchens & Joinery",
  description: "Custom kitchens and joinery connecting people and places.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
