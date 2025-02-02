import Image from "next/image";
import Link from "next/link";
import React from "react";

function Practice({ languages, userFlow }: { languages: any; userFlow?: any }) {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-10">
        {languages.map((language: any) => {
          const rate = Math.floor(
            (userFlow[0][`${language.programming_language}`] /
              language.total_topics) *
              100
          );
          return (
            <Link
              href={`/practice/${language.programming_language}`}
              className="relative border border-gray-200 rounded-lg shadow w-[40%] min-w-96 p-6 flex items-center gap-4 hover:scale-[1.02] duration-200"
              key={language.id}
            >
              <Image
                src={`/codeImages/${language.programming_language}.png`}
                alt=" "
                width={100}
                height={100}
                className="w-20 h-20"
              />
              <div className="grow">
                <h1 className="text-primary font-bold text-lg">
                  {language.programming_language.replace(/_/g, " ")}
                </h1>
                <div className="relative">
                  <div
                    className=" overflow-hidden
                    bg-gray-300 rounded-full w-full h-2.5 relative max-w-4xl mx-auto mt-8"
                  >
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        transform: `translateX(-${100 - (rate || 0)}%)`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-green-500 font-bold absolute right-0 -top-6 overflow-clip">
                    {rate}%
                  </p>
                </div>
              </div>
              <div className="absolute -top-5 right-4">
                <div className="flex gap-1">
                  <Star isActive={Number(rate) >= 20 ? true : false} />
                  <Star isActive={Number(rate) >= 40 ? true : false} />
                  <Star isActive={Number(rate) >= 60 ? true : false} />
                  <Star isActive={Number(rate) >= 80 ? true : false} />
                  <Star isActive={Number(rate) >= 100 ? true : false} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Practice;

const Star = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      className={`w-4 h-4 ${isActive ? "text-yellow-300" : "text-gray-200"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};
