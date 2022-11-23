// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://nextjs-azgbnu--3000.local-corp.webcontainer.io/:path*',
        },
      ]
    },
};