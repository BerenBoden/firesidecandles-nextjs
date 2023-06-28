/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    DATABASE_URL:
      "postgresql://postgres:JXr2hLjcSLCQQdlafYrO@containers-us-west-197.railway.app:7767/railway",
    NEXTAUTH_SECRET: "RE7tfF3mlUNOUNU8x/SRWzIoKQU+ZFz/FaQBzpig0AU=",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
