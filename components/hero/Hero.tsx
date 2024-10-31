"use client";
import Link from "next/link";
import logo from "@/public/GT-Logo/GT_logo.png";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useState } from "react";
import { signInFormAction } from "@/actions/signInAction";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded-md border border-background3 bg-background3 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? "Loading..." : "Sign In"}
    </button>
  );
}

function Hero() {
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
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
              Gammal Tech
            </h2>
            <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
              Master programming, discover your strengths, and gain real-world
              experience through internships. The best performers will be
              selected to join our team and elevate their careers.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider text-background3 transition-colors duration-200 hover:text-background3/90"
            >
              Learn more
              <svg
                className="ml-2 inline-block w-3"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </Link>
          </div>
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
                  <label
                    htmlFor="email"
                    className="mb-1 inline-block font-medium text-background"
                  >
                    E-mail
                  </label>
                  <input
                    onChange={onChangHandler}
                    placeholder="Email"
                    required={true}
                    type="text"
                    className={`relative mb-2 h-12 w-full flex-grow appearance-none rounded border bg-white px-4 shadow-sm transition duration-200  focus:outline-none focus:ring ${
                      formStateType?.errors?.email
                        ? "border-red-500 focus:border-red-500 ring-red-500/50"
                        : "border-gray-300 focus:border-background2/40 ring-background2/20"
                    }`}
                    id="email"
                    name="email"
                  />
                  {formStateType?.errors?.email && (
                    <h1 className="text-red-500 absolute">
                      {formStateType.errors["email"]}
                    </h1>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 inline-block font-medium text-background"
                  >
                    Password
                  </label>
                  <input
                    onChange={onChangHandler}
                    placeholder="Password"
                    required={true}
                    type="password"
                    className={`relative mb-1 h-12 w-full flex-grow appearance-none rounded border bg-white px-4 shadow-sm transition duration-200  focus:outline-none focus:ring ${
                      formStateType?.errors?.password
                        ? "border-red-500 focus:border-red-500 ring-red-500/50"
                        : "border-gray-300 focus:border-background2/40 ring-background2/20"
                    }`}
                    id="password"
                    name="password"
                  />
                  {formStateType?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateType?.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <SubmitButton />
                </div>
                <Link
                  href="#"
                  className="mb-2 inline-block text-base text-gray-400 hover:text-primary mx-auto w-full text-center"
                >
                  Forget Password?
                </Link>
                <p className="text-base text-center">
                  <span className="pr-0.5">Don&apos;t have an account?</span>
                  <Link
                    href="/sign-up"
                    className="text-primary font-bold text-nowrap"
                  >
                    Sign Up
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

export default Hero;
