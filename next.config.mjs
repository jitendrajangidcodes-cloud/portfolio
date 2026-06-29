/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites under /<repo>. Set NEXT_PUBLIC_BASE_PATH
// (e.g. "/portfolio") in CI for production; leave empty for local dev / custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Static HTML export — required for GitHub Pages.
  output: 'export',
  basePath,
  // Trailing slashes make static hosting (Pages) resolve nested routes reliably.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static export cannot use it.
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
