/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'search.pstatic.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;
