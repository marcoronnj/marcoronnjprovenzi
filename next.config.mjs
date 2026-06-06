/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Pagine statiche
      { source: "/chi-sono", destination: "/it/about", statusCode: 301 },
      { source: "/contatti", destination: "/it/contact", statusCode: 301 },
      { source: "/preventivo-online", destination: "/it/contact", statusCode: 301 },
      { source: "/servizi", destination: "/it/services", statusCode: 301 },
      { source: "/servizi/:path*", destination: "/it/services", statusCode: 301 },
      { source: "/progetti", destination: "/it/selected-works", statusCode: 301 },
      { source: "/blog", destination: "/it", statusCode: 301 },
      { source: "/blog/:path*", destination: "/it", statusCode: 301 },
      { source: "/privacy-policy", destination: "/it", statusCode: 301 },
      { source: "/cookie-policy", destination: "/it", statusCode: 301 },

      // Progetti specifici (prima dei wildcard)
      {
        source: "/progetti/tiziana-scarpati-nails",
        destination: "/it/projects/tiziana-scarpati-nails",
        statusCode: 301
      },
      { source: "/progetti/bali1987", destination: "/it/projects/bali-1987", statusCode: 301 },
      {
        source: "/progetti/cellularstore-italia",
        destination: "/it/projects/cellular-store-dalmine",
        statusCode: 301
      },
      { source: "/progetti/cma-garden", destination: "/it/projects/cma-garden", statusCode: 301 },

      // Wildcard progetti non mappati
      { source: "/progetti/:path*", destination: "/it/selected-works", statusCode: 301 }
    ];
  }
};

export default nextConfig;
