const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    publicDirectory: true,
  },
});
