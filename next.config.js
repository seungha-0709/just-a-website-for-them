const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  // output: "standalone",
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      "images.unsplash.com",
      "just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.s3.ap-northeast-2.amazonaws.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

module.exports = withVanillaExtract(nextConfig);
