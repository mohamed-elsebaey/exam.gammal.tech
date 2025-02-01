import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://exam.gammal.tech/"),
  title: {
    default: "Gammal Tech Exam",
    template: `%s | Gammal Tech Exam`,
  },
  description:
    "We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.",
  // verification: {
  //   google: "google-site-verification",
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user: any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  }
  // const userRole = user?.role || false;
  const profilePath =
    user?.image_url ||
    "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png";

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${open_Sans.className} antialiased mx-auto max-w-[1800px]`}
      >
        <Header login={user}  profilePath={profilePath} />
        <div className="mt-16 min-h-[550px]">{children}</div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
