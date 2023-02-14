const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

const DEFAULT_SHARE_SCOPE = {
  'react': {
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
  },
  fakeReactDom: {
    import: 'react-dom',
    shareKey: 'react-dom',
  },
};

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    app: `app@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'micro_ui',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    "./AddressBar": "./ui/AddressBar",
    "./GlobalNav": "./ui/GlobalNav",
    "./VercelLogo": "./ui/VercelLogo",
  },
  // shared: ['react', 'react/', 'react-dom', 'next/router'],
  shared: {
    // ...DEFAULT_SHARE_SCOPE,
    // ...FAKE_SHARE_SCOPE,
    // '@module-federation/nextjs-mf/src/include-defaults': {
    //   singleton: true,
    //   requiredVersion: false,
    //   eager: true,
    // },
  }
};

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          ...federationConfig,
          remotes: remotes(options.isServer),
          // extraOptions: {
          //   automaticAsyncBoundary: true
          // },
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
