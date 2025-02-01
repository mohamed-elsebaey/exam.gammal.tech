"use client";
import Link from "next/link";
import logo from "@/public/GT-Logo/GT_logo.png";
import Image from "next/image";
import {  useActionState, useEffect, useState } from "react";
import { signInFormAction } from "@/actions/signInAction";
import SubmitButton from "@/ui/SubmitButton";
import InputFelid from "@/ui/InputFelid";
import { signIn } from "next-auth/react";

function SignIn() {
  const [formState, formAction] = useActionState(signInFormAction, null);
  const [formStateType, setFormStateType] = useState<any>({});

  const [googleLinkDisabled, setGoogleLinkDisabled] = useState(false);

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
      <div className="relative container overflow-hidden px-4 py-16">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="max-md:order-1 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <Image
              src="https://readymadeui.com/signin-image.webp"
              width={350}
              height={350}
              className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
              alt="login-image"
              loading="lazy"
            />
          </div>
          <div className="w-full md:min-w-[350px] max-w-lg">
            <div className="overflow-hidden rounded-xl border-1 border-gray-600 bg-white p-7 shadow-lg shadow-gray-300 sm:p-10">
              <div className="mb-5 text-center ">
                <div className="flex flex-col items-center justify-center gap-1 text-background font-mono">
                  <span className="relative border-[1px] border-gray-400 w-full my-6" />
                  <Image
                    src={logo}
                    alt="GT"
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
                    placeholder="Enter your Email"
                    type="text"
                    onChange={onChangHandler}
                    required
                    errorStyle={formStateType?.errors?.email}
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
                    placeholder="Enter your Password"
                    type="password"
                    onChange={onChangHandler}
                    errorStyle={formStateType?.errors?.password}
                    required
                  />
                  {formStateType?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateType?.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-gray-800 ml-3 block text-sm"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link
                    href="#"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mt-8 mb-2 sm:mb-4">
                  <SubmitButton text="Sign In" />
                </div>

                <p className="text-sm text-center mt-6">
                  Don&apos;t have an account{" "}
                  <Link
                    href="/sign-up"
                    className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
                {/* *************** */}
                <hr className="my-6 border-gray-300" />

                <div className="space-x-6 flex justify-center">
                  <button
                    disabled={googleLinkDisabled}
                    type="button"
                    className={`flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                      googleLinkDisabled ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      signIn("google");
                      setGoogleLinkDisabled(true);
                    }}
                  >
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                  {/* <Suspense fallback="Loading...">
                    <button
                      type="button"
                      className="border-none outline-none"
                      onClick={() => {
                        signIn("google");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        className="inline"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#fbbd00"
                          d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                          data-original="#fbbd00"
                        />
                        <path
                          fill="#0f9d58"
                          d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                          data-original="#0f9d58"
                        />
                        <path
                          fill="#31aa52"
                          d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                          data-original="#31aa52"
                        />
                        <path
                          fill="#3c79e6"
                          d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                          data-original="#3c79e6"
                        />
                        <path
                          fill="#cf2d48"
                          d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                          data-original="#cf2d48"
                        />
                        <path
                          fill="#eb4132"
                          d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                          data-original="#eb4132"
                        />
                      </svg>
                    </button>
                  </Suspense>
                  <button type="button" className="border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      fill="#000"
                      viewBox="0 0 22.773 22.773"
                    >
                      <path
                        d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      fill="#007bff"
                      viewBox="0 0 167.657 167.657"
                    >
                      <path
                        d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                        data-original="#010002"
                      ></path>
                    </svg>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
