import "../app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({ subsets: [""], display: "swap" });

export const metadata = {
  title: {
    template: "%s - Pinewood",
    default: "Pinewood",
  },
  description: `Luxurious cabin hotel located in the heart of the mountains,
    surrounded by quiet pine forests and breathtaking natural views.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer>Copyright by the Pinewood</footer>
      </body>
    </html>
  );
}
