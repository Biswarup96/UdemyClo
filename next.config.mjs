/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'vwpg9gbush.ufs.sh',
      'img-c.udemycdn.com' // ✅ Added here
    ],
    remotePatterns: [
      { hostname: 'utfs.io' },
      { hostname: 'img.clerk.com' }
    ]
  }
};

export default nextConfig;
