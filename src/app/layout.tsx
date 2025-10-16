import type { Metadata } from "next";
import Link from "next/link";
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
  title: "KIRK™ Collar — Kinetic Instant Response for Neck Emergencies",
  description: "Patent‑pending rapid‑deployment neck compression collar. Stops the clock when seconds matter most.",
  metadataBase: new URL("https://kirkcollar.com"),
  openGraph: {
    title: "KIRK™ Collar",
    description: "Rapid‑deployment neck compression collar for traumatic neck bleeds.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="container">{children}</main>
        <footer>
          <div className="container" style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
            <div>
              <div className="muted">KIRK™ is a trademark.</div>
              <div className="muted">© 2025</div>
            </div>
            <div style={{display:"flex",gap:16}}>
              <Link href="/patent">Patent</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
