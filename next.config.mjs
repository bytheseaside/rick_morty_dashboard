/** @type {import('next').NextConfig} */
const nextConfig = {
  optimization.minimize: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
    ],
  },

};

export default nextConfig;
