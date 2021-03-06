// const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackCdnPlugin = require('html-webpack-cdn-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlPlugin = require('html-webpack-plugin');
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

// const cdnConfig = {
// host: ["https://cdn.auth0.com", "https://maxcdn.bootstrapcdn.com"],
// cdn: {
// js: "https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js",
// css: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css",
// },
// };

const baseWebpackConfig = function baseWebpackConfig() {
  return {
    entry: [
      'babel-polyfill',
      './client/src/app/index.js',
    ],
    output: {
      path: path.join(__dirname, '../client/dist/public'),
      filename: 'bundle.[hash].js',
      sourceMapFilename: '[name].map',
      publicPath: '/',
    },
    // for file location resolution.
    resolve: {
      extensions: ['.js', '.json', '.scss'],
      modules: [path.resolve(__dirname, 'client/src/app'), 'node_modules'],
    },
    module: {
      // Shut off warnings about using pre-built javascript files
      // as Quill.js unfortunately ships one as its `main`.
      noParse: /node_modules\/quill\/dist/,
      rules: [
        {
          test: /\.(js)$/,
          include: [
            // files to apply this loader to
            path.join(__dirname, '../client/src/app'),
          ],
          exclude: /node_modules/,
          // loaders process from right to left
          loaders: ['babel-loader', 'eslint-loader'],
        },
      ],
    },
    plugins: [
      new HtmlPlugin({
        title: 'Sokwe',
        template: '../sokwe/client/src/app/index.html',
        chunksSortMode: 'dependency',
        // alwaysWriteToDisk: true,
      }),
      // new HtmlWebpackCdnPlugin(cdnConfig),
      // new HtmlWebpackHarddiskPlugin({
      // outputPath: path.join(__dirname, '../client/dist/public'),
      // }),
    ],
  };
};

module.exports = baseWebpackConfig;
