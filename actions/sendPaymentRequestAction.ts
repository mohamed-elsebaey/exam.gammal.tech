"use server";

export const sendPaymentRequestAction = async ({ chargeRequest }: any) => {

  console.log(JSON.stringify(chargeRequest))
  const response = await fetch(
    "https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init",
    {
      method: "POST",
      body: JSON.stringify(chargeRequest),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // try {
  //   // Parse the response into a JavaScript object for easier access to data
  //   const responseData = await response.json();

  //   // Access specific data properties based on the expected response format
  //   // (You'll need to consult the At Fawry API documentation for the exact structure)
  //   console.log("Payment Reference Number:", responseData.paymentRefNum);
  //   console.log("Payment URL:", responseData.paymentUrl);
  //   console.log("Status Code:", responseData.statusCode); // Assuming this exists
  //   // ... Add more access logic for other relevant properties in responseData
  // } catch (error) {
  //   console.error("Error parsing response:", error);
  //   // Handle parsing errors appropriately (e.g., by notifying the user or retrying)
  // }
};
