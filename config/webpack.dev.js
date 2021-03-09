
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('../config/paths');
const webpack = require('webpack');

const webpackDevClientEntry = require.resolve(
  'react-dev-utils/webpackHotDevClient'
);
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    webpackDevClientEntry,
    paths.appIndexJs
  ],
  devServer: {
    port: 8060,
    contentBase: paths.appPublic,
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    hot: true,
    // clientLogLevel: 'error',
    overlay: false,
    historyApiFallback: true,
    transportMode: 'ws'
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {}
    })
  ]
});
