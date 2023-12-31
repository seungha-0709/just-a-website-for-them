const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  output: "standalone",
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            fallback: "file-loader",
            name: "assets/fonts/[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      "images.unsplash.com",
      "just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withVanillaExtract(nextConfig);
