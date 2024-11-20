import PaymentPage from "@/components/pricing/PaymentPage";
import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Payment",
  description: "....",
};

async function page({ searchParams }: any) {
  const plans: any = { Economy: 50, Premium: 299, Gold: 150 };
  const plan: string = searchParams.plan;

  const sessionData = await getSession();

  if (!sessionData || !plans[plan]) {
    redirect("/");
  }
  const planPrice: number = plans[plan];
  const subtype =
    planPrice == 50
      ? "Economy - 12 Attempts"
      : planPrice == 150
      ? "Gold - 45 Attempts"
      : "Premium - 100 Attemps";

  // Fawry Data
  const id: number = sessionData.user.id;
  const name: string = sessionData.user.name;
  const email: string = sessionData.user.email;
  const phone: string = sessionData.user.phone;

  // Merchant codes based on environment (replace with environment variables)
  const fawryProductionMerchantCode = "400000013920";
  const fawryStagingMerchantCode = "770000014277";

  // Secure key based on environment (replace with environment variables)
  const fawryProductionSecureKey = "c33a5245-0137-426f-a42b-8c60af642ba9";
  const fawryStagingSecureKey = "341c6bad-323a-486a-be2d-41c17a4abb2f";

  const merchantCode = fawryStagingMerchantCode;
  const secureKey = fawryStagingSecureKey;

  // Random reference number generation (consider using crypto.randomBytes for better security)
  const minRefNum = 7700000000;
  const maxRefNum = 7799999999;
  const merchantRefNum = (
    Math.floor(Math.random() * (maxRefNum - minRefNum + 1)) + minRefNum
  ).toString();

  // Redirection URL (replace with actual URL)
  const returnUrl =
    "https://www.gammal-tech-final-exam.com/home(logged%20in)/payment/response.php";

  // Item details (replace with actual logic)
  const itemId = `Id-${planPrice}`;
  const quantity = 1;
  const price = Number((planPrice - 2.5).toFixed(2));
  const totalPrice = Number(planPrice);

  // String concatenation (consider using template literals for readability)
  const string = `${merchantCode}${merchantRefNum}${itemId}${returnUrl}${itemId}${quantity}${price}${secureKey}`;

  // Signature generation using crypto (consider a crypto library for better security)
  const crypto = require("crypto");
  const signature = crypto.createHash("sha256").update(string).digest("hex");

  // Now you have the signature:
  // console.log(signature);

  // You can use this signature for Fawry integration (replace with actual integration logic)
  // ...
  //
  function buildChargeRequest() {
    const chargeRequest = {
      merchantCode,
      merchantRefNum,
      customerMobile: phone,
      customerEmail: email,
      customerName: name,
      customerProfileId: id,
      paymentExpiry: "1631138400000",
      language: "en-gb",
      chargeItems: [
        {
          itemId,
          description: subtype,
          price,
          quantity: 1,
          imageUrl: "https://www.gammal-tech-final-exam.com/media/GT_logo.png",
        },
      ],
      returnUrl:
        "https://www.gammal-tech-final-exam.com/home(logged%20in)/payment/response.php",
      authCaptureModePayment: false,
      signature,
    };
    return chargeRequest;
  }

  // return <PaymentPage chargeRequest={buildChargeRequest()} />;
  return <PaymentPage />;
}

export default page;
