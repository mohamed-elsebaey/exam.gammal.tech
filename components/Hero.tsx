import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="font-sans py-12 bg-gradient-to-r from-primary/10 to-white/10">
        <div className="grid lg:grid-cols-2 gap-12 container">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">
              Gammal Tech Exam
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
              mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis
              in bibendum tincidunt.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel
              tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce
              vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.
            </p>
            <p className="text-sm text-gray-500">
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
            <p className="text-sm text-gray-500">
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
          </div>
          <div>
            <Image
              src="https://readymadeui.com/management-img.webp"
              width={500}
              height={500}
              alt="Placeholder Image"
              className="rounded-lg object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
