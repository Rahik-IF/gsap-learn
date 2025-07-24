import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GSAP Demos by Rahik",
  description: "Managed by Rahikibneforman",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon512_maskable.png",
    apple: "/icons/icon512_maskable.png",
    shortcut: "/icons/icon512_maskable.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll`}
      >
      <ServiceWorkerRegister />

        {children}
      </body>
    </html>
  );
}
