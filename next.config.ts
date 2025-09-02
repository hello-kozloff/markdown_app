import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      include: /src\/assets\/.*\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js"
      }
    }
  }
};

export default createNextIntlPlugin(
  "./src/shared/i18n/request.ts"
)(nextConfig);
