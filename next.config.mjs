/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracing: false,
};

export default nextConfig;

// const nextConfig = {
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// /* ...Your other config rules */
// }

// module.exports = nextConfig