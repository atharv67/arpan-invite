import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // fully static export — no server needed, deploys to Vercel as static files
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
