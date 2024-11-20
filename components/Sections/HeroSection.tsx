import Image from "next/image";
import React from "react";

import HeroImg from '@/public/codeImages/code.png'

function HeroSection() {
  return (
    <div className="py-12 bg-primary bg-bg-2 bg-contain bg-center">
      <div className="grid lg:grid-cols-2 gap-12 container items-center">
        <div className="bg-white p-8 rounded-lg">
          <Image
            src={HeroImg.src}
            width={500}
            height={500}
            alt="Placeholder Image"
            className="rounded-lg object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://readymadeui.com/management-img.webp"
            width={500}
            height={500}
            alt="Placeholder Image"
            className="rounded-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
