/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react', '@radix-ui/react-progress'],
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
