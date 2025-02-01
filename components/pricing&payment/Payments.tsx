'use client'
import { sendPaymentRequestAction } from "@/app/(payments)/_actions/sendPaymentRequestAction";
import SubmitButton from "@/ui/SubmitButton";
import React, { useActionState } from "react";

function Payments({
  id,
  name,
  email,
  phone,
  subtype,
  price,
}: {
  id: string;
  name: string;
  email: string;
  phone: string;
  subtype: string;
  price: number;
}) {

  const [formState, formAction] = useActionState(sendPaymentRequestAction, null);
  console.log(formState)
  return (
    <div className="container">
      <div className="mx-auto mt-6 sm:mt-8 lg:mt-0 md:w-[70%]">
        <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6">
          <div className="space-y-4">
            <dl className="flex items-center gap-4 ">
              <dt className="text-base font-normal text-gray-500 min-w-[20%] text-left ">
                Name
              </dt>
              <dd className="text-base font-medium text-gray-900 ">{name}</dd>
            </dl>
            <dl className="flex items-center gap-4 ">
              <dt className="text-base font-normal text-gray-500 min-w-[20%] text-left ">
                Email
              </dt>
              <dd className="text-base font-medium text-gray-900 ">{email}</dd>
            </dl>
            <dl className="flex items-center gap-4 ">
              <dt className="text-base font-normal text-gray-500 min-w-[20%] text-left ">
                Phone
              </dt>
              <dd className="text-base font-medium text-gray-900 ">{phone}</dd>
            </dl>
            <dl className="flex items-center gap-4 ">
              <dt className="text-base font-normal text-gray-500 min-w-[20%] text-left ">
                Subtype
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {subtype}
              </dd>
            </dl>
            <dl className="flex items-center gap-4 justify-between">
              <dt className="text-base font-normal text-gray-500 ">Price</dt>
              <dd className="text-base font-medium text-gray-900 ">
                {price - 2.5} LE
              </dd>
            </dl>

            {/* <dl className="flex items-center gap-4 justify-between">
              <dt className="text-base font-normal text-gray-500 min-w-[20%] text-left ">Savings</dt>
              <dd className="text-base font-medium text-green-500">-$299.00</dd>
            </dl> */}

            <dl className="flex items-center gap-4 justify-between">
              <dt className="text-base font-normal text-gray-500">Tax</dt>
              <dd className="text-base font-medium text-gray-900 ">2.50 LE</dd>
            </dl>
          </div>

          <dl className="flex items-center gap-4  border-t border-gray-200 pt-2 justify-between">
            <dt className="text-base font-bold text-gray-900 ">Total</dt>
            <dd className="text-base font-bold text-gray-900 ">{price} LE</dd>
          </dl>
        </div>

        <div className="mt-6">
          <form action={formAction}>
            <input hidden name="id" type="text" defaultValue={id} />
            <input hidden name="name" type="text" defaultValue={name} />
            <input hidden name="email" type="text" defaultValue={email} />
            <input hidden name="phone" type="text" defaultValue={phone} />
            <input hidden name="planPrice" type="number" defaultValue={price} />
            <input hidden name="subtype" type="text" defaultValue={subtype} />
            <SubmitButton text="Pay now"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payments;
