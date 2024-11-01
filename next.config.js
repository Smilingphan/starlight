/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Bật chế độ strict của React
    images: {
        domains: ['your-image-domain.com'], // Thêm các domain của hình ảnh nếu bạn sử dụng hình ảnh từ bên ngoài
    },
    env: {
        // Nếu bạn có các biến môi trường, có thể định nghĩa ở đây
        CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
    },
};

module.exports = nextConfig;