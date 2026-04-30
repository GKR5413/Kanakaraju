import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isDev ? "" : "/Kanakaraju",
  images: { unoptimized: true },
};

export default nextConfig;
