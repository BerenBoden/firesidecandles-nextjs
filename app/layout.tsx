import Header from "./components/common/header/Header";
import { Dancing_Script } from "next/font/google";
import Footer from "./components/common/page/Footer";
import { Providers } from "./store/provider";
import { NextAuthProvider } from "./nextProviders";
import "./globals.css";
import CartSlideOver from "./components/common/elements/CartSlideOver";
import { Page } from "@/types/types";
import axios from "@/lib/axios";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

async function getNavigation(): Promise<Page> {
  const { data } = await axios.get(
    `pages?sort=id&populate[categories][populate][category_tags][populate][feature][populate][0]=cover,category_tag`
  );
  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationData = await getNavigation();
  return (
    <html lang="en">
      <NextAuthProvider>
        <Providers>
          <body className={`${dancingScript.variable}`}>
            <div className="z-10 relative">
              <Header data={navigationData} />
            </div>
            <div className="h-38" />
            <main className="z-0 relative">{children}</main>
            <CartSlideOver title={"Your cart"} />
            <Footer />
          </body>
        </Providers>
      </NextAuthProvider>
    </html>
  );
}
