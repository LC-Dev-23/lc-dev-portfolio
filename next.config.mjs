/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lc-dev.site",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lc-dev.site",
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;
