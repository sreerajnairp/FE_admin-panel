/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  devIndicators :{
    buildActivity : false
  },
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      // Disable HMR 
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/dashboard/booking',
        destination: '/dashboard/booking/request',
        permanent: true,
      },
      {
        source: '/dashboard/location',
        destination: '/dashboard/location/state',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: ["doodlebluelive.com"],
  },
}

module.exports = nextConfig
