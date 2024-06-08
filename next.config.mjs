/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
            {
                protocol: "https",
                hostname: "example.com"
            },
            {
                protocol: "https",
                hostname: "img.daisyui.com"
            }
        ],
    },
};

export default nextConfig;
