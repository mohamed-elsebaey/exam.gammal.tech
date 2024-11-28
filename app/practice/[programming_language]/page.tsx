import type { Metadata } from "next";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import {
  getCoreLanguages,
  getCoreLanguagesDataByUserId,
  getUserDataFromDB,
} from "@/db/db";

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
    redirect("/sign-in?path=dynamic-practice");
  }

  const core_languages = await getCoreLanguages();
  const userFlow = await getCoreLanguagesDataByUserId(userId);

  return (
    <div className="py-20">
      <h1>123</h1>
    </div>
  );
}

export default page;
