/** @type {import('next').NextConfig} */
const nextConfig = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000, // Check for changes every one second
    };
    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
