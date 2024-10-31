import localFont from "next/font/local";
import "./globals.css";

import { FavoritesProvider } from "../context/FavoritesContext";
import NextTopLoader from "nextjs-toploader";
import NavBar from "../components/organisms/NavBar";
import Footer from "../components/atoms/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Cocktail Collective",
  description: "The Cocktail Collective",
};

export default function RootLayout({ children }) {
  return (
    <FavoritesProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />

          <NavBar />

          {children}
          <Footer />
        </body>
      </html>
    </FavoritesProvider>
  );
}
