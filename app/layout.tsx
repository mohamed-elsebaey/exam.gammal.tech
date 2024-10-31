import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://exam.gammal.tech/"),
  title: {
    default: "Gammal Tech",
    template: `%s | Gammal Tech`,
  },
  description:
    "We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.",
  // verification: {
  //   google: "google-site-verification",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${open_Sans.className} antialiased mx-auto max-w-[1800px]`}
      >
        <Header
          login={false}
          profilePath="https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png"
        />
        <div className="mt-16">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
