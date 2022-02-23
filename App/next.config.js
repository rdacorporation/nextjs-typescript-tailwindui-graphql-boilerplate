/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    HELLO_WORLD: 'This is a server runtime config value',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    PUBLIC_HELLO_WORLD: 'This is a public runtime config value',
  },
};

module.exports = nextConfig;
