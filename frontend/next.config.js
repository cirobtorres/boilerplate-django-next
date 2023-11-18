/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 5000, // Check for changes every 5 seconds
            aggregateTimeout: 300, // delay before rebuilding
        };
        return config;
    },
}

module.exports = nextConfig
