/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:8080", //TODO: update api endpoint
  },
};

module.exports = nextConfig;
