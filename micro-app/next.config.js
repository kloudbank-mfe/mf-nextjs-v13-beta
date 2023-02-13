/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // ui: `ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
    ui: `micro_ui@http://localhost:3030/_next/static/chunks/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'app',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {},
  // shared: ['react', 'react-dom'],
  // shared: {
  // ...deps,
  // 'next/link': {
  //   singleton: true,
  //   eager: true,
  // },
  // 'react-dom': {
  //   shareKey: 'react-dom',
  //   import: 'react-dom',
  //   requiredVersion: deps['react-dom'],
  //   version: deps['react-dom'],
  //   strictVersion: true,
  //   singleton: true,
  //   eager: true,
  // },
  // react: {
  //   shareKey: 'react',
  //   import: 'react',
  //   requiredVersion: deps['react'],
  //   version: deps['react'],
  //   strictVersion: true,
  //   singleton: true,
  //   eager: true,
  // },
  // react: { singleton: false, requiredVersion: false, eager: false },
  // 'react-dom': { singleton: false, requiredVersion: false, eager: false },
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
  // shared: {
  // fakeReact: {
  //   import: 'react',
  //   shareKey: 'react',
  // },
  // fakeReactDom: {
  //   import: 'react-dom',
  //   shareKey: 'react-dom',
  // },
  // react: { singleton: true, requiredVersion: '18.2.0', eager: true },
  // 'react-dom': { singleton: true, requiredVersion: '18.2.0', eager: true },
  // react: { requiredVersion: false, eager: true },
  // 'react-dom': { requiredVersion: false, eager: true },
  // react: { singleton: true, requiredVersion: false },
  // 'react-dom': { singleton: true, requiredVersion: false },
  // react: { eager: false },
  // 'react-dom': { eager: false },
  // },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
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
