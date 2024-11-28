import type { Metadata } from "next";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import { getUserDataFromDB } from "@/db/db";
import Exam from "@/components/exam/Exam";

export const metadata: Metadata = {
  title: "Exam Page",
};

async function page() {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user: any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  } else {
    redirect("/sign-in?path=exam");
  }

  return (
    <div className="py-20">
        <Exam/>
    </div>
  );
}

export default page;
