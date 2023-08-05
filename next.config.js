/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  env: {
    GOOGLE_CLIENT_ID: "1050309461907-h7cn8aovje8qi33tonhmv2o2d0r3i0dm.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_ID: "b7ff10e7cb67e9cc24d8",
    GITHUB_SECRET: "65004e503988e51e6c53be58eb43a734d6d1c373",
    DISCORD_CLIENT_ID: "1135024897266028746",
    DISCORD_CLIENT_SECRET: "C9kRY3Z8nUyREPIBpkUa-SgsUfmmgMA8"
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'cdn.discordapp.com'],

      unoptimized: true,

  },
};

module.exports = nextConfig;
