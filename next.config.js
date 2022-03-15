/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
