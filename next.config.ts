import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dyryptpqq/image/**",
      },
      {
        protocol: "https",
        hostname: "lwfiles.mycourse.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
