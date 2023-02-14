const NextFederationPlugin = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;

const DEFAULT_SHARE_SCOPE = {
  react: {
    singleton: true,
    requiredVersion: false,
  },
  'react/': {
    singleton: true,
    requiredVersion: false,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: false,
  },
  'next/dynamic': {
    requiredVersion: false,
    singleton: true,
  },
  'styled-jsx': {
    requiredVersion: false,
    singleton: true,
  },
  'styled-jsx/style': {
    requiredVersion: false,
    singleton: true,
  },
  'next/link': {
    requiredVersion: false,
    singleton: true,
  },
  'next/router': {
    requiredVersion: false,
    singleton: true,
  },
  'next/script': {
    requiredVersion: false,
    singleton: true,
  },
  'next/head': {
    requiredVersion: false,
    singleton: true,
  },
};

const FAKE_SHARE_SCOPE = {
  fakeReact: {
    import: 'react',
    shareKey: 'react',
    requiredVersion: false,
    singleton: true,
  },
  fakeReactDom: {
    import: 'react-dom',
    shareKey: 'react-dom',
    requiredVersion: false,
    singleton: true,
  },
  fakeNextLink: {
    import: 'next/link',
    shareKey: 'next/link',
    requiredVersion: false,
    singleton: true,
  },
};

const federationConfig = {
  name: "micro_ui",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./AddressBar": "./ui/AddressBar",
    "./GlobalNav": "./ui/GlobalNav",
    "./VercelLogo": "./ui/VercelLogo",
  },
  remotes: {},
  // shared: {
    // ...deps,
    // "next/link": {
    //   singleton: true,
    //   eager: true,
    // },
    // "react-dom": {
    //   requiredVersion: deps["react-dom"],
    //   singleton: true,
    //   eager: true,
    // },
    // react: {
    //   requiredVersion: deps["react"],
    //   singleton: true,
    //   eager: true,
    // },
    // react: { singleton: true, eager: true, requiredVersion: false },
    // "react-dom": { singleton: true, eager: true, requiredVersion: false },
    // react: { singleton: true },
    // "react-dom": { singleton: true },
  // },
  shared: {
    // ...DEFAULT_SHARE_SCOPE,
    // ...FAKE_SHARE_SCOPE,
    // fakeReact: {
    //   import: 'react',
    //   shareKey: 'react',
    //   requiredVersion: false,
    //   singleton: true,
    // },
    // fakeReactDom: {
    //   import: 'react-dom',
    //   shareKey: 'react-dom',
    //   requiredVersion: false,
    //   singleton: true,
    // },
  }
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
