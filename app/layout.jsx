 import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ennovat LMS",
  description:
    "Streamline the way you manage your course, class, and students effortlessly with our platform under one roof.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-body bg-cover bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
