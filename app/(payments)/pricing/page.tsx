import PricingPage from "@/components/pricing/PricingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "....",
};

async function page() {
  return <PricingPage />;
}

export default page;
