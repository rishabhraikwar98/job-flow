import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Job Flow - Track Your Job Search",
  description: "Monitor applications, get reminders, and land your dream job faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
