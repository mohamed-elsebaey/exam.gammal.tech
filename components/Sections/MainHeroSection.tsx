"use client";

import Image from "next/image";
import React from "react";

import heroImage from "@/public/codeImages/languages.png";

import { motion } from "framer-motion";
import Link from "next/link";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Hello World!";

function MainHeroSection() {
  const words = text.split(" ");
  return (
    <div className="container">
      <div className="flex justify-center md:justify-between items-center py-28">
        <div className="p-10 relative before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-background2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.04 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-extrabold text-primary leading-relaxed">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <motion.span
                    className="inline-block"
                    transition={transition}
                    variants={variants}
                  >
                    {word}
                  </motion.span>
                  {index < words.length - 1 && " "}
                </React.Fragment>
              ))}
            </h1>
            <div className="mt-4 mb-12">
              <motion.p
                className="text-base text-gray-800 leading-relaxed"
                transition={transition}
                variants={variants}
              >
                Elevate your learning and ace your exams! Combine in-depth study
                with hands-on practice. Our platform provides the tools you need
                to apply your knowledge in a real exam-like setting and achieve
                your academic goals.
              </motion.p>
            </div>

            <Link
              href="/practice"
              className="px-6 py-3 text-white text-sm tracking-wider font-semibold rounded-md border-none outline-none bg-background3/90 hover:bg-background3"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        <div className="hidden md:block">
          <Image
            src={heroImage.src}
            width={600}
            height={400}
            alt=""
            className="object-cover object-center"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

export default MainHeroSection;
