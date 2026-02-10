import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    prependData: `@use "@/styles/variables.scss" as *;`,
  },
};

export default nextConfig;
