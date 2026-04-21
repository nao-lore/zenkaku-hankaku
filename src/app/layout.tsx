import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "全角半角変換ツール - カタカナ・英数字・記号対応 | 無料オンライン変換",
  description:
    "全角と半角を簡単に変換できる無料オンラインツール。カタカナ、英数字、記号、スペースを個別に選択して一括変換。コピペするだけで即変換できます。",
  keywords: [
    "全角",
    "半角",
    "変換",
    "全角半角変換",
    "カタカナ変換",
    "英数字変換",
    "記号変換",
    "オンラインツール",
    "無料",
  ],
  openGraph: {
    title: "全角半角変換ツール - カタカナ・英数字・記号対応",
    description:
      "全角と半角を簡単に変換できる無料オンラインツール。カタカナ、英数字、記号、スペースを個別に選択して一括変換。",
    type: "website",
    locale: "ja_JP",
    siteName: "全角半角変換ツール",
  },
  twitter: {
    card: "summary_large_image",
    title: "全角半角変換ツール - カタカナ・英数字・記号対応",
    description:
      "全角と半角を簡単に変換できる無料オンラインツール。カタカナ、英数字、記号、スペースを個別に選択して一括変換。",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zenkaku-hankaku.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "全角半角変換ツール",
              description:
                "全角と半角を簡単に変換できる無料オンラインツール。カタカナ、英数字、記号、スペースを個別に選択して一括変換。",
              url: "https://zenkaku-hankaku.vercel.app",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              inLanguage: "ja",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
