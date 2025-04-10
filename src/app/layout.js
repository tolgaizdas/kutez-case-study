import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kutez Case Study",
  description: "A case study for Kutez",
  icons: {
    icon: "https://www.kutez.com/icon.svg?2f18bd94f58ef4e3",
    shortcut: "https://www.kutez.com/icon.svg?2f18bd94f58ef4e3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
