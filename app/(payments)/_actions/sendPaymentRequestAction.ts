"use server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function sendPaymentRequestAction(
  prevState: any,
  formData: FormData
) {
  const id: string = formData.get("id")?.toString().trim() || "";
  const name: string = formData.get("name")?.toString().trim() || "";
  const email: string = formData.get("email")?.toString().trim() || "";
  const phone: string = formData.get("phone")?.toString().trim() || "";
  const subtype: string = formData.get("subtype")?.toString().trim() || "";
  const planPrice: number = Number(formData.get("planPrice"));

  // ********************************************************************************
  // Merchant codes based on environment (replace with environment variables)
  const fawryProductionMerchantCode: string =
    process.env.FAWRY_PRODUCTION_MERCHANT_CODE || "";
  const fawryStagingMerchantCode: string =
    process.env.FAWRY_STAGING_MERCHANT_CODE || "";

  // Secure key based on environment (replace with environment variables)
  const fawryProductionSecureKey =
    process.env.FAWRY_PRODUCTION_SECURE_KEY || "";
  const fawryStagingSecureKey = process.env.FAWRY_STAGING_SECURE_KEY || "";

  // Api Url (replace with environment variables)
  const fawryApiUrlProduction =
    "https://atfawry.com/fawrypay-api/api/payments/init";
  const fawryApiUrlStating =
    "https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init";

  const merchantCode: string = fawryProductionMerchantCode;
  const secureKey: string = fawryProductionSecureKey;

  // Random reference number generation (consider using crypto.randomBytes for better security)
  const minRefNum = 6600000000;
  const maxRefNum = 6699999999;

  const merchantRefNum: string = (
    Math.floor(Math.random() * (maxRefNum - minRefNum + 1)) + minRefNum
  ).toString();

  // Redirection URL (replace with actual URL)
  // const returnUrl: string =
  //   "https://www.gammal-tech-final-exam.com/home(logged%20in)/payment/response.php";

  // const returnUrl: string = "http://localhost:3000/response";
  const returnUrl: string = "https://exam-gammal-tech.vercel.app//response";

  // Item details (replace with actual logic)
  const itemId: string = `Id-${planPrice}`;
  const quantity: number = 1;

  const price: string = (planPrice - 2.5).toFixed(2);

  const totalPrice: number = planPrice;

  // String concatenation (consider using template literals for readability)
  const string: string = `${merchantCode}${merchantRefNum}${id}${returnUrl}${itemId}${quantity}${price}${secureKey}`;

  // Signature generation using crypto (consider a crypto library for better security)
  const crypto = require("crypto");
  const signature: string = crypto
    .createHash("sha256")
    .update(string)
    .digest("hex");

  const buildChargeRequest = () => {
    const chargeRequest = {
      merchantCode,
      merchantRefNum,
      customerMobile: phone,
      customerEmail: email,
      customerName: name,
      customerProfileId: `${id}`,
      // paymentExpiry: "1631138400000",
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
      returnUrl: returnUrl,
      authCaptureModePayment: false,
      signature,
    };
    return chargeRequest;
  };
  // ********************************************************************************

  let redirectUrl: any;
  try {
    const response = await axios.post(
      fawryApiUrlProduction,
      buildChargeRequest()
    );
    redirectUrl = response.data;
  } catch (error) {
    console.error("Error -- :", error);
  }

  redirect(redirectUrl);
}
