/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;