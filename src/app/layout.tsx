import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/alexandria/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipBee — Shop Worldwide. We'll Deliver the Rest.",
  description:
    "Shop from your favorite stores around the world while ShipBee and Connected handle the journey from checkout to your doorstep in Qatar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
