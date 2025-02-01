import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";
import Payment from "@/components/pricing&payment/Payments";

export const metadata: Metadata = {
  title: "Payment",
  description: "....",
};

async function page({ searchParams }: any) {
  const plans: any = { Economy: 50, Premium: 299, Gold: 150 };

  // plan from url ?plan=Gold
  const { plan } = await searchParams;

  const sessionData = await getSession();

  if (!sessionData || !plans[plan]) {
    redirect("/");
  }
  const planPrice: number = plans[plan];

  const subtype: string =
    planPrice == 50
      ? "Economy - 10 Attempts"
      : planPrice == 150
      ? "Gold - 40 Attempts"
      : "Premium - 100 Attempts";

  // user Data
  const id: string = sessionData.user.id;
  const name: string = sessionData.user.name;
  const email: string = sessionData.user.email;
  const phone: string = sessionData.user.phone;

  return (
    <div className="py-20">
      <Payment id={id} name={name} email={email} phone={phone} price={planPrice} subtype={subtype}/>
    </div>
  );
}

export default page;
