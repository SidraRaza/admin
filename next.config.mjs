/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['cdn.sanity.io', 'loremflickr.com'], // Combine domains into a single array
  },
};

export default nextConfig;
