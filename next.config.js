/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return  [
            {
                source: "/auth/api/:path*",
                destination: 'http://localhost:8080/api/:path*'
            }
        ]
    }
}

module.exports = nextConfig
