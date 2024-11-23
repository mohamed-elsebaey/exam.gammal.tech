import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata: Metadata = {
  title: "Fawry Response",
};


async function page({ searchParams }: any) {
  const { type } = await searchParams;
  const { referenceNumber } = await searchParams;
  const { merchantRefNumber } = await searchParams;
  const { orderAmount } = await searchParams;
  const { paymentAmount } = await searchParams;
  const { fawryFees } = await searchParams;
  const { orderStatus } = await searchParams;
  const { paymentMethod } = await searchParams;
  const { expirationTime } = await searchParams;
  const { customerName } = await searchParams;
  const { customerProfileId } = await searchParams;
  const { signature } = await searchParams;
  const { taxes } = await searchParams;
  const { paymentMethodName } = await searchParams;
  const { statusCode } = await searchParams;
  const { statusDescription } = await searchParams;
  const { basketPayment } = await searchParams;
  const { requestUID } = await searchParams;


  redirect("/")

  return (
    <div className='mt-28'>
     <h1>{type}</h1>
     <h1>{referenceNumber}</h1>
     <h1>{merchantRefNumber}</h1>
     <h1>{orderAmount}</h1>
     <h1>{paymentAmount}</h1>
     <h1>{fawryFees}</h1>
     <h1>{orderStatus}</h1>
     <h1>{paymentMethod}</h1>
     <h1>{expirationTime}</h1>
     <h1>{customerName}</h1>
     <h1>{customerProfileId}</h1>
     <h1>{signature}</h1>
     <h1>{taxes}</h1>
     <h1>{paymentMethodName}</h1>
     <h1>{statusCode}</h1>
     <h1>{statusDescription}</h1>
     <h1>{basketPayment}</h1>
     <h1>{requestUID}</h1>
    </div>
  )
}

export default page