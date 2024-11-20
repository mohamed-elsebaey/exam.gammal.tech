// "use client";
// import React from "react";

// function PaymentPage(chargeRequest: any) {
//   const checkout = () => {
//     const configuration = {
//       locale: "en", // Default language
//     //   mode: DISPLAY_MODE.POPUP, // Choose your preferred display mode (POPUP, INSIDE_PAGE, SIDE_PAGE)
//     };

//     // const chargeRequest = buildChargeRequest(); // Call the buildChargeRequest function
//     FawryPay.checkout(chargeRequest, configuration);
//   };

//   const handleClick = () => {
//     checkout(); // Call the FawryPay checkout function
//   };

//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href={
//           "https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/css/fawrypay-payments.css"
//         }
//       />
//       <script
//         src="https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js"
//         async
//       />
//       <input
//         type="image"
//         onClick={()=>handleClick()}
//         src="https://www.atfawry.com/assets/img/FawryPayLogo.jpg"
//         alt="pay-using-fawry"
//         id="fawry-payment-btn"
//       />
//     </>
//   );
// }

// export default PaymentPage;

import React from 'react'

function PaymentPage() {
  return (
    <div>PaymentPage</div>
  )
}

export default PaymentPage