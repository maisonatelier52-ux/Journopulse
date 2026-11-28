/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Canonical host: one hop from the bare domain to https://www
      { source: "/:path*", has: [{ type: "host", value: "journopulse.com" }], destination: "https://www.journopulse.com/:path*", permanent: true },

      // Pillar page renamed for SEO: old "positive news" URL -> new URL (301)
      { source: "/topics/julio-herrera-velutini-family-positive-news", destination: "/topics/julio-herrera-velutini-family-philanthropy", permanent: true },

      // Old article paths that were still listed in the sitemap/metadata -> the live equivalents (301)
      { source: "/business/hargreaves-lansdown-appoints-stitchy-as-lead-brand-strategy-communications-uk", destination: "/pr/hargreaves-lansdown-appoints-stitchy-as-lead-creative-agency", permanent: true },
      { source: "/fashion/balenciaga-names-british-designer-martine-rose-creative-director", destination: "/fashion/balenciaga-appoints-martine-rose-creative-director-november-2026", permanent: true },
      { source: "/business/comms-pros-advise-against-nvidia-bringing-back-jensen-huang-ceo", destination: "/pr/comms-pros-advise-against-nvidia-bringing-back-jensen-huang-ceo", permanent: true },
    ];
  },
  async headers() {
    return [
      // Static assets keep their file names, so use a day-long cache with background revalidation (not "immutable").
      { source: "/img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
      { source: "/:file(style|detail|extras|icons|search).css", headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
      { source: "/custom.js", headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
    ];
  },
};
export default nextConfig;
