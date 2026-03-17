/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Muhammadfaizan",
  images: {
    unoptimized: true,
    path: "/Muhammadfaizan/_next/image",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Muhammadfaizan",
  },
};
export default nextConfig;
