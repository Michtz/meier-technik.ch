import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        // Diese Header gelten für alle Routen
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Verhindert, dass deine Seite woanders eingebettet wird (Schutz vor Clickjacking)
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Verhindert, dass der Browser Dateitypen rät
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Datenschutz für Links
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Zwingt HTTPS für 2 Jahre
          },
        ],
      },
    ];
  },
};

export default nextConfig;
