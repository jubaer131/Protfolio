import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Protfolio",
  description: " my Frontend Web Developer protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
