/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

const DEFAULT_SHARE_SCOPE = {
  react: {
    singleton: true,
    requiredVersion: false,
    eager: true,
  },
  'react/': {
    singleton: true,
    requiredVersion: false,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: false,
    eager: true,
  },
  'next/dynamic': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'styled-jsx': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'styled-jsx/style': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'next/link': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'next/router': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'next/script': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
  'next/head': {
    requiredVersion: false,
    singleton: true,
    eager: true,
  },
};

const FAKE_SHARE_SCOPE = {
  fakeReact: {
    requiredVersion: false,
    singleton: true,
  },
  fakeReactDom: {
    requiredVersion: false,
    singleton: true,
  },
  'next/link': {
    eager: true,
  },
};

const { createDelegatedModule } = require('@module-federation/utilities');
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // app: createDelegatedModule(require.resolve('./remote-delegate.js'), {
    //   remote: `app@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    // }),
    // ui: `ui@http://localhost:3031/remoteEntry.js`,
    ui: `micro_ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
    // ui: createDelegatedModule(require.resolve('./remote-delegate.js'), {
    //   remote: `micro_ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
    // }),
    // ui: `internal ./remote-delegate.js?remote=micro_ui@http://localhost:3030/_next/static/${location}/remoteEntry.js`,
  };
};

const federationConfig = {
  name: 'app',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    "./Test": "./ui/Test",
  },
  shared: {
    // ...DEFAULT_SHARE_SCOPE,
    // ...FAKE_SHARE_SCOPE,
    // '@module-federation/nextjs-mf/src/include-defaults': {
    //   singleton: true,
    //   requiredVersion: false,
    //   eager: true,
    // },
  },
};

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          ...federationConfig,
          remotes: remotes(options.isServer),
          // extraOptions: {
          //   automaticAsyncBoundary: true
          // },
        }),

        // new ModuleFederationPlugin({
        //   shared: {
        //     ...DEFAULT_SHARE_SCOPE,
        //   }
        // }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
