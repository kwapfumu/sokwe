// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackCdnPlugin = require('html-webpack-cdn-plugin');
const HtmlPlugin = require('html-webpack-plugin');
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

// const cdnConfig = {
// host: "https://maxcdn.bootstrapcdn.com",
// cdn: {
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
      filename: '[name].bundle.js',
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
        filename: 'index.html',
        template: '../sokwe/client/src/app/index.html',
        inject: 'head',
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
