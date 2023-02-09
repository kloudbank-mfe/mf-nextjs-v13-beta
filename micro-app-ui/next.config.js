const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app: `app@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    // ui: `remote@http://localhost:3031/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'ui',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    "./AddressBar": "./ui/AddressBar",
    "./GlobalNav": "./ui/GlobalNav",
    "./VercelLogo": "./ui/VercelLogo",
  },
  shared: ['react', 'react-dom'],
  // shared: {
    // react: { singleton: true, eager: true, requiredVersion: false },
    // "react-dom": { singleton: true, eager: true, requiredVersion: false },
    // 'react-dom': {
    //   requiredVersion: deps['react-dom'],
    //   singleton: true,
    // },
    // react: {
    //   requiredVersion: deps['react'],
    //   singleton: true,
    // },
  // },
};

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          ...federationConfig,
          // remotes: remotes(options.isServer),
        }),
      );
      // config.plugins.push(
      //   new FederatedTypesPlugin({
      //     federationConfig: {
      //       ...federationConfig,
      //       shared: {},
      //     },
      //     disableTypeCompilation: true,
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
