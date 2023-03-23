/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cataas.com",
        pathname: "/cat",
      },
    ],
  },
};

module.exports = nextConfig;
