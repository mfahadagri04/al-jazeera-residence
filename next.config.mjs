/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        reactRemoveProperties: process.env.NODE_ENV === 'production',
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: ['res.cloudinary.com'],
    }
};

export default nextConfig;
