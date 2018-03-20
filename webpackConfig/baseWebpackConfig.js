// const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const baseWebpackConfig = function baseWebpackConfig() {
  return {
    entry: [
      'babel-polyfill',
      './client/src/app/index.js',
    ],
    output: {
      path: path.join(__dirname, 'client/dist/public'),
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
            path.join(__dirname, '/client/src/app'),
          ],
          exclude: /node_modules/,
          // loaders process from right to left
          loaders: ['react-hot-loader/babel', 'babel-loader', 'eslint-loader'],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        // chunks: "initial",
        // minSize: 30000,
        // minChunks: 1,
        // maxAsyncRequests: 5,
        // maxInitialRequests: 3,
        // name: true,
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            // priority: -20,
            reuseExistingChunk: true,
          },
          // Create a `vendors` chunk, which includes all code from node_modules in the
          // whole application.
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            name: "vendor",
            // priority: -10,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlPlugin({
        title: 'Sokwe',
        template: 'client/src/app/index.html',
        // favicon:'../client/dist/public/assets/favicon.ico',
        inject: 'head',
        chunksSortMode: 'dependency',
      }),
    ],
  };
};

module.exports = baseWebpackConfig;
