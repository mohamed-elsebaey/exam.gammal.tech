import type { Metadata } from "next";
import SignIn from "@/components/sign-in-up/SignIn";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Join the Gammal Tech community and sign in to unlock more features. ",
};

async function page() {
  if (await getSession()) {
    redirect("/");
  }
  return (
    <>
      <SignIn />
    </>
  );
}

export default page;
