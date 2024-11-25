import type { Metadata } from "next";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import Profile from "@/components/profile/Profile";
import { getCoreLanguages, getUserDataFromDB } from "@/db/db";
import Practice from "@/components/practice/Practice";

export const metadata: Metadata = {
  title: "Core Exams",
};

async function page() {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user: any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  } else {
    redirect("/sign-in?path=practice");
  }

  const core_languages  = await getCoreLanguages();

  return (
    <div className="py-20">
      <Practice languages={core_languages}/>
    </div>
  );
}

export default page;
