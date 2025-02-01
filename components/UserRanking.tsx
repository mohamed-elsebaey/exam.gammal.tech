import Image from "next/image";
import React from "react";

import Top from "@/public/medals/top.png";

import Gold from "@/public/medals/Gold.png";
import Silver from "@/public/medals/Silver.png";
import Bronze from "@/public/medals/Bronze.png";
import { getTop5UsersRanking } from "@/db/db";
import { MoveRight } from "lucide-react";
import Link from "next/link";

async function UserRanking() {
  const topUsers = await getTop5UsersRanking();

  return (
    <>
      <div className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-lg">
        <div className="flex items-center justify-between bg-gray-100 py-2 px-4">
          <div className="flex items-center gap-4 ">
            <h2 className="text-xl font-semibold text-primary">Top Coders</h2>
            <Image
              loading="lazy"
              src={Top.src}
              alt=""
              width={50}
              height={50}
              className="w-12 h-12 object-cover object-top"
            />
          </div>
          <Link href="/ranking" className="flex gap-2 text-gray-500 group">
            See All
            <MoveRight  className="group-hover:translate-x-1 duration-300"/>
          </Link>
        </div>
        <ul className="divide-y divide-gray-200">
          {topUsers.map((user: any, index: number) => {
            return (
              <li className="flex items-center py-4 px-6 " key={index + 1}>
                <span className="text-gray-700 text-lg font-medium mr-4">
                  {index + 1}.
                </span>
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src={
                    user.image_url ||
                    "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png"
                  }
                  alt="User avatar"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-primary">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {user.points} points
                  </p>
                </div>
                {index == 0 && (
                  <Image
                    loading="lazy"
                    src={Gold.src}
                    alt=""
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover object-top"
                  />
                )}
                {index == 1 && (
                  <Image
                    loading="lazy"
                    src={Silver.src}
                    alt=""
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover object-top"
                  />
                )}
                {index == 2 && (
                  <Image
                    loading="lazy"
                    src={Bronze.src}
                    alt=""
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover object-top"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default UserRanking;
