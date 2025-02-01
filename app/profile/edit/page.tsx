import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getUserDataFromDB } from "@/db/db";
import { getSession } from "@/lib/lib";

import EditProfile from "@/components/profile/EditProfile";

export const metadata: Metadata = {
  title: "Profile Edit",
};


async function page() {
  const sessionData = await getSession();

  const userId = sessionData?.user?.id;

  let user: any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  } else {
    redirect("/sign-in?path=edit-profile");
  }
  return <EditProfile userData={user}/>;
}

export default page;
