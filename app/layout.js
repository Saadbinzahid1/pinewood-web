import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "../app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the Pinewood</footer>
      </body>
    </html>
  );
}
