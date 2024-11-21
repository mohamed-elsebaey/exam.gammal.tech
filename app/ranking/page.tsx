import type { Metadata } from "next";
import SignIn from "@/components/sign-in-up/SignIn";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import Ranking from "@/components/ranking/Ranking";

export const metadata: Metadata = {
  title: "Ranking",
  description:
    ".............",
};

async function page() {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  return (
    <div className="py-24">
      <Ranking userId={userId}/>
    </div>
  );
}

export default page;
