import React from "react";
import UserRanking from "../UserRanking";
import Image from "next/image";

import BrainImg from "@/public/codeImages/brain.png";

function Top5RankSection() {
  return (
    <div className="">
      <div className="container flex items-center justify-center lg:justify-between gap-2 py-20">
        <Image
          loading="lazy"
          src={BrainImg.src}
          alt=""
          width={500}
          height={500}
          className="object-cover object-center hidden lg:block"
        />
        <UserRanking />
      </div>
    </div>
  );
}

export default Top5RankSection;
