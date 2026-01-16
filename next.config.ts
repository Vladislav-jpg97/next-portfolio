import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  typedRoutes: true,
  images: {
    qualities: [70, 100]
  },
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
    turbopackFileSystemCacheForDev: true,
    optimizePackageImports: [
      "@hookform/resolvers",
      "aos",
      "class-variance-authority",
      "clsx",
      "next",
      "next-intl",
      "react",
      "react-dom",
      "react-hook-form",
      "tailwind-merge",
      "zod",
    ]
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers:[
          {
            key: "X-DEVELOPED-BY",
            value: "Tyo Vladislav"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
