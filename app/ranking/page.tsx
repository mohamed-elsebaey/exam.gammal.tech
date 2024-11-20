import type { Metadata } from "next";
import SignIn from "@/components/sign-in-up/SignIn";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ranking",
  description:
    ".............",
};

async function page() {
  return (
    <>
      <h1>Ranking</h1>
      <h1>Ranking</h1>
      <h1>Ranking</h1>
      <h1>Ranking</h1>
      <h1>Ranking</h1>
      <h1>Ranking</h1>
    </>
  );
}

export default page;
