import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "GROGGY GAMES｜グロッキーゲーム", description: "みんなで遊べるパーティーゲーム" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090512" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
