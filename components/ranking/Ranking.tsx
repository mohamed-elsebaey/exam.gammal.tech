import Image from "next/image";
import React from "react";

import Top from "@/public/medals/top.png";

import Gold from "@/public/medals/cup-gold.png";
import Silver from "@/public/medals/cup-silver.png";
import Bronze from "@/public/medals/cup-bronze.png";

import { getUsersRanking } from "@/db/db";

async function Ranking({ userId }: { userId?: number }) {
  const topUsers = await getUsersRanking();

  return (
    <div className="container">
      {/* <div className="flex justify-center items-end">
        <div className="w-[30%]">
          <Image
            loading="lazy"
            src={Silver.src}
            alt=""
            width={50}
            height={100}
            className="object-cover object-top"
          />
          <div className="bg-silver shadow-sm w-full h-12"></div>
        </div>
        <div className="w-[30%]">
          <div className="flex">
            <Image
              loading="lazy"
              src={Gold.src}
              alt=""
              width={50}
              height={100}
              className="object-cover object-top"
            />
            <Image
              width={100}
              height={100}
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover mr-4"
              src={
                "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png"
              }
              alt="avatar"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-primary">
                mohamed elsebaey
              </h3>
              <p className="text-gray-600 text-base">5000 points</p>
            </div>
          </div>
          <div className="bg-gold shadow-sm w-full h-16"></div>
        </div>
        <div className="w-[30%]">
          <Image
            loading="lazy"
            src={Bronze.src}
            alt=""
            width={50}
            height={100}
            className="object-cover object-top"
          />
          <div className="bg-bronze shadow-sm w-full h-8"></div>
        </div>
      </div> */}
      {/*  */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-lg font-semibold text-primary bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-4 ">
                  Top Coders
                  <Image
                    loading="lazy"
                    src={Top.src}
                    alt=""
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover object-top"
                  />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user: any, index: number) => {
              return (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b "
                  key={index + 1}
                >
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 whitespace-nowrap min-w-96"
                  >
                    <span
                      className={`text-lg font-medium  ${
                        index + 1 < 10 ? "mr-6" : "mr-4"
                      } ${
                        user.id == userId
                          ? "text-background3 scale-150"
                          : "text-gray-700 "
                      }`}
                    >
                      {index + 1}
                      {index + 1 > 20 ? " - " : "."}
                    </span>
                    {/*  */}
                    {index + 1 <= 20 && (
                      <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        src={
                          user.image_url ||
                          "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png"
                        }
                        alt="avatar"
                      />
                    )}
                    {/*  */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary text-wrap min-w-52 max-w-60">
                        {user.name || "User"}
                      </h3>
                      <p className="text-gray-500 font-medium text-base">
                        {user.points} points
                      </p>
                    </div>
                    {index == 0 && <AddImage src={Gold.src} />}
                    {index == 1 && <AddImage src={Silver.src} />}
                    {index == 2 && <AddImage src={Bronze.src} />}
                  </th>
                  <td className="px-6 py-4 text-lg font-medium text-primary max-w-28">
                    {user.country || "None"}
                  </td>
                  <td className="px-6 py-4 text-lg font-medium text-primary max-w-28">
                    {user.state || "None"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*  */}
    </div>
  );
}

export default Ranking;

const AddImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt=""
      width={width || 50}
      height={height || 100}
      className="object-cover object-top"
    />
  );
};
