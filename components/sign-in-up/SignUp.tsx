"use client";
import Link from "next/link";
import logo from "@/public/GT-Logo/GT_logo.png";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useState } from "react";

import { signInFormAction } from "@/actions/signInAction";
import SubmitButton from "@/ui/SubmitButton";
import InputFelid from "@/ui/InputFelid";

function SignUp() {
  const [formState, formAction] = useActionState(signInFormAction, null);
  const [formStateType, setFormStateType] = useState<any>({});

  useEffect(() => {
    setFormStateType(formState);
  }, [formState]);

  const onChangHandler = () => {
    setFormStateType({});
  };
  return (
    <div className="relative bg-background bg-bg-1 bg-opacity-90">
      <svg
        className="absolute inset-x-0 -bottom-1 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        ></path>
      </svg>
      <div className="relative container overflow-hidden px-4 py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {/* --- */}
          <div className="w-full md:min-w-[350px] max-w-lg">
            <div className="overflow-hidden rounded-xl border-1 border-gray-600 bg-white p-7 shadow-lg shadow-gray-300 sm:p-10">
              {/* Logo image */}
              <div className="mb-5 text-center ">
                <div className="flex flex-col items-center justify-center gap-1 text-background font-mono">
                  <span className="relative border-[1px] border-gray-400 w-full my-6" />
                  <Image
                    src={logo}
                    alt="Alpha Herbs"
                    width={70}
                    className="absolute bg-white"
                  />
                </div>
              </div>
              <form action={formAction}>
                <div className="mb-6">
                  <InputFelid
                    label="E-mail"
                    name="email"
                    placeholder="Email"
                    type="text"
                    errorStyle={formStateType?.errors?.email}
                    onChange={onChangHandler}
                    required
                  />
                  {formStateType?.errors?.email && (
                    <h1 className="text-red-500 absolute">
                      {formStateType.errors["email"]}
                    </h1>
                  )}
                </div>
                <div className="mb-6">
                  <InputFelid
                    label="Password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    errorStyle={formStateType?.errors?.password}
                    onChange={onChangHandler}
                    required
                  />
                  {formStateType?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateType?.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <SubmitButton text="Sign Up" />
                </div>
                <p className="text-base text-center">
                  <span className="pr-0.5">Already have an account?</span>
                  <Link
                    href="/sign-in"
                    className="text-primary font-bold text-nowrap"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
