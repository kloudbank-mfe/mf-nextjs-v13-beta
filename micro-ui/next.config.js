const NextFederationPlugin = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "micro_ui",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./AddressBar": "./ui/AddressBar",
    "./GlobalNav": "./ui/GlobalNav",
    "./VercelLogo": "./ui/VercelLogo",
  },
  remotes: {},
  shared: {
    ...deps,
    "next/link": {
      singleton: true,
      eager: true,
    },
    "react-dom": {
      requiredVersion: deps["react-dom"],
      singleton: true,
      eager: true,
    },
    react: {
      requiredVersion: deps["react"],
      singleton: true,
      eager: true,
    },
    // react: { singleton: true, eager: true, requiredVersion: false },
    // "react-dom": { singleton: true, eager: true, requiredVersion: false },
    // react: { singleton: true },
    // "react-dom": { singleton: true },
  },
};

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(new NextFederationPlugin(federationConfig));
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
