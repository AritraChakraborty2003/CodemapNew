import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codemap.online",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
