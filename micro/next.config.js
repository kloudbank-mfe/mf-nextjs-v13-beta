/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    ui: `ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
    // ui: `remote@http://localhost:3031/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'app',
  filename: 'static/chunks/remoteEntry.js',
  // exposes: {},
  // shared: ['react', 'react-dom'],
  // shared: {
  //   'react-dom': {
  //     requiredVersion: deps['react-dom'],
  //     singleton: true,
  //   },
  //   react: {
  //     requiredVersion: deps['react'],
  //     singleton: true,
  //   },
  // },
  // shared: {
  //   ...deps,
  //   'react-router-dom': {
  //     singleton: true,
  //   },
  //   'react-dom': {
  //     singleton: true,
  //   },
  //   react: {
  //     singleton: true,
  //   },
  // },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  webpack: (config, options) => {
    // config.resolve.fallback = {
    //   ui: false,
    // };
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          ...federationConfig,
          remotes: remotes(options.isServer),
          // extraOptions:{
          //   automaticAsyncBoundary: true,
          // },
          // extraOptions: {
          //   skipSharingNextInternals: true,
          // },
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
