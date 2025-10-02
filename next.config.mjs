/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      // Map root paths to creative-agency pages
      { source: "/about", destination: "/creative-agency/about" },
      { source: "/services", destination: "/creative-agency/services" },
      { source: "/service-details", destination: "/creative-agency/service-details" },
      { source: "/portfolio", destination: "/creative-agency/portfolio" },
      { source: "/portfolio-grid", destination: "/creative-agency/portfolio-grid" },
      { source: "/portfolio-slider", destination: "/creative-agency/portfolio-slider" },
      { source: "/portfolio-details", destination: "/creative-agency/portfolio-details" },
      { source: "/team", destination: "/creative-agency/team" },
      { source: "/blog", destination: "/creative-agency/blog" },
      { source: "/blog-grid", destination: "/creative-agency/blog-grid" },
      { source: "/blog-details", destination: "/creative-agency/blog-details" },
      { source: "/faq", destination: "/creative-agency/faq" },
      { source: "/contact", destination: "/creative-agency/contact" },
    ];
  },
};

export default nextConfig;
