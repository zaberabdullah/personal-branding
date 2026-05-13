import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zaber Abdullah — Full Stack Developer",
    template: "%s | Zaber Abdullah",
  },
  description:
    "Minimal, production-ready developer portfolio focused on modern web experiences, performance, and accessibility.",
  keywords: [
    "developer",
    "portfolio",
    "Next.js",
    "React",
    "JavaScript",
    "Full Stack",
  ],
  authors: [{ name: " Zaber Abdullah" }],
  openGraph: {
    title: "Zaber Abdullah — Full Stack Developer",
    description:
      "Clean, responsive portfolio showcasing projects, experience, and skills.",
    url: siteUrl,
    siteName: "Zaber Abdullah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full Stack Developer",
    description:
      "Clean, responsive portfolio showcasing projects, experience, and skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans min-h-dvh bg-background text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
