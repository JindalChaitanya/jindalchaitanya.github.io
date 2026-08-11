/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Place at the root level, NOT inside experimental
  allowedDevOrigins: ['192.168.29.81', 'localhost:3000'],
};

export default nextConfig;