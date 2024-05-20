/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "loremflickr.com"
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "https",
                hostname: "w7.pngwing.com" 
            },
            {
                protocol: "https",
                hostname: "usefulangle.com"
            },
        ],
    },
};

export default nextConfig;
