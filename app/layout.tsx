import Header from "./components/common/header/Header";
import { Dancing_Script } from "next/font/google";
import Footer from "./components/common/page/Footer";
import { Providers } from "./store/provider";
import { NextAuthProvider } from "./nextProviders";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <Providers>
          <body className={`${dancingScript.variable}`}>
            <div className="z-10 relative">
              {/* @ts-expect-error Server Component */}
              <Header />
            </div>
            <div className="h-38" />
            <main className="z-0 relative">{children}</main>
            <Footer />
          </body>
        </Providers>
      </NextAuthProvider>
    </html>
  );
}
