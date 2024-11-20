import { getSession } from "@/lib/lib";
import PricingCard from "./PricingCard";

async function PricingPage() {
  const user = await getSession();
  const isLogin = user ? true : false;
  return (
    <>
      <div className="container pt-16 pb-20 ">
        <h2 className="pb-20 text-center font-bold text-4xl text-primary">
          Select the plan that’s right for you
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <PricingCard plan="Economy" price={50} attempts={12} isLogin={isLogin}/>
          <PricingCard plan="Gold" price={150} attempts={45} isLogin={isLogin}/>
          <PricingCard plan="Premium" price={299} attempts={110} isLogin={isLogin}/>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
