import PricingPage from "@/components/pricing&payment/PricingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

async function page() {
  return <PricingPage />;
}


export default page;
