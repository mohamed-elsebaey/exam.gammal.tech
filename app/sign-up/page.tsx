import type { Metadata } from "next";
import SignUp from "@/components/sign-in-up/SignUp";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Join the Gammal Tech community and sign in to unlock more features. ",
};

async function page() {
  return (
    <>
      <SignUp/>
    </>
  );
}

export default page;
