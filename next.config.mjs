/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },

};

export default nextConfig;
