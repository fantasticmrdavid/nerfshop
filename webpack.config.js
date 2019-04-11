const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
  API_URL,
  NODE_ENV,
  PAYPAL_CLIENT_ID,
} = process.env;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${APP_DIR}/index.html`,
  filename: 'index.html',
  inject: 'body',
  minify: {
      collapseWhitespace: true
  },
});

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'assets/js/[name]-bundle.[chunkhash].js',
    chunkFilename: 'assets/js/[name]-chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [APP_DIR, 'node_modules'],
    alias: {
      // https://github.com/webpack/webpack/issues/4666
      Constants: `${APP_DIR}/constants`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url-loader', 'file-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(API_URL),
        NODE_ENV: JSON.stringify(NODE_ENV),
        PAYPAL_CLIENT_ID: JSON.stringify(PAYPAL_CLIENT_ID),
      },
    }),
    new CopyWebpackPlugin([
      { from: `${APP_DIR}/assets/`, to: 'assets/' }
    ])
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
