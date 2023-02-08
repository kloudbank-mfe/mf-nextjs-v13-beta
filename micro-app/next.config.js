/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // ui: `ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
    ui: `remote@http://localhost:3031/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'app',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {},
  remotes: {},
  shared: {
    // react: { singleton: true, requiredVersion: false },
    // "react-dom": { singleton: true, requiredVersion: false },
    // react: { eager: true },
    // "react-dom": { eager: true },
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.resolve.fallback = {
      ui: false,
    }; 
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          ...federationConfig,
          remotes: remotes(options.isServer),
        }),
      );
      // config.plugins.push(
      //   new FederatedTypesPlugin({
      //     federationConfig: {
      //       ...federationConfig,
      //       shared: {},
      //     },
      //   }),
      // );
    }

    // config.infrastructureLogging = {
    //   level: 'log'
    // };
    return config;
  },
};

module.exports = nextConfig;
