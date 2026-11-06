/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Pillar page renamed for SEO: old "positive news" URL -> new URL (301)
      {
        source: "/topics/julio-herrera-velutini-family-positive-news",
        destination: "/topics/julio-herrera-velutini-family-philanthropy",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
