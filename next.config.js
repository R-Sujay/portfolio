/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
  },
  experimental: { urlImports: ["https://themer.sanity.build/"] },
};

module.exports = nextConfig;
