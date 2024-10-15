// next.config.js
const nextConfig = {
  reactStrictMode: true,
  basePath: "/", // Optional: Set base path if needed
  env: {
    NEXT_PUBLIC_ROUTER_BASEPATH: "/", // Ensure this is set properly
  },
};

export default nextConfig; // Ensure you are using `module.exports`
