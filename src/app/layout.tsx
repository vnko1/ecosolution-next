import type { Metadata } from "next";
import { Fira_Sans, Oswald } from "next/font/google";

import { AppProvider } from "@/context";
import "@/styles/index.scss";
import { Header } from "./_components";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-fira-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Ecosolution",
  description: "Renewable energy app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira_sans.variable} ${oswald.variable}`}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
