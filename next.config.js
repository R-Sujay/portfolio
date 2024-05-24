/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  experimental: { urlImports: ["https://themer.sanity.build/"] },
};

module.exports = nextConfig;
