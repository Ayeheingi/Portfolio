import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AYE THEINGI — Web Developer Portfolio",
  description: "沖縄でWebプログラミングを学ぶAYE THEINGIのポートフォリオ。制作物、スキル、学習成果を紹介します。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={inter.className}>{children}</body></html>;
}
