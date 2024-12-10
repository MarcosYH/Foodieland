import type { Metadata } from "next";
import "../assets/css/_tailwind.css";
import "../assets/css/globals.css";
import { Inter } from "next/font/google";
import { Mounted, Header, Footer, Newsletter } from "@/components/widgets";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Foodieland",
  description: "App for foodies",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Mounted>
          <NextTopLoader color="#66bbce" showSpinner={false} />
          <div className="container mx-auto max-w-screen-xl p-3">
            <Header />
            {children}
            <Newsletter />
            <Footer />
          </div>
        </Mounted>
      </body>
    </html>
  );
}
