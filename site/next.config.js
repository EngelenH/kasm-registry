/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hans Engelen Bryxx',
    description: 'Bryxx list of Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://engelenh.github.io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
