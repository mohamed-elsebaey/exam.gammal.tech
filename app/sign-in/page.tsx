import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Join the Gammal Tech community and sign in to unlock more features. ",
};

async function page() {
  return (
    <>
      <Hero />
    </>
  );
}

export default page;
