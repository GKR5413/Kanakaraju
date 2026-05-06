import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
