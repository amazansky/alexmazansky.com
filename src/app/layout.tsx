import type { Metadata } from "next";
import { Inconsolata, Merriweather, Rubik } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Mazansky",
  description:
    "Hi, I'm Alex Mazansky, a junior at Brown University studying Computer Science.\
     I'm an ambitious problem-solver, blending technical expertise with creative insights to address meaningful challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${merriweather.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
