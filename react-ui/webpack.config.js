const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const packageJsonDeps = require("./package.json")
const path = require("path")

module.exports = {
  entry: './src/index',
  entry: {
    app: {
      import: './src/index',
    },
  },
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   filename: 'app.js',
  //   publicPath: '/dist/', //webpack-dev-server가 사용하는 결과물간의 상대 경로 
  // },

  devServer: {
    publicPath: 'auto',
    hot: true,
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './AddressBar': './src/components/AddressBar',
        './GlobalNav': './src/components/GlobalNav',
        './VercelLogo': './src/components/VercelLogo',
      },
      // shared: {},
      shared: {
        react: {
          // eager: true,
          // requiredVersion: packageJsonDeps["react"],
          requiredVersion: false,
          singleton: true
        },
        "react-dom": {
          // eager: true,
          // requiredVersion: packageJsonDeps["react-dom"],
          requiredVersion: false,
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
