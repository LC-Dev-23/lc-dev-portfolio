/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "www.lc-dev.site",
  //         pathname: "**",
  //       },
  //       {
  //         protocol: "https",
  //         hostname: "lc-dev.site",
  //         pathname: "**",
  //       }
  //     ],
  //   },
};

export default nextConfig;
