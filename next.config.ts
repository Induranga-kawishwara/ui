import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@deneb-ui/core"],
};

export default nextConfig;
