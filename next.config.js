/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://superheroapi.com/api/:path*",
      },
    ];
  },
  async middleware() {
    const proxyMiddleware = createProxyMiddleware({
      target: "https://superheroapi.com",
      changeOrigin: true,
      secure: false,
    });

    return {
      "/api": proxyMiddleware,
    };
  },
};
