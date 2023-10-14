/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.externals = [...config.externals, "jsdom"];
      return config;
    },
  }

module.exports = nextConfig
