const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
// const exTractCss = require('./parts/extractCss');
const loadSCSS = require('./parts/loadSCSS');
const loadImages = require('./parts/loadImages');
const loadVideos = require('./parts/loadVideos');
const generateSourceMaps = require('./parts/generateSourceMaps');
// const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const clean = require('./parts/clean');
const minifyJs = require('./parts/minifyJs');
const minifyCss = require('./parts/minifyCss');


const webpackConfigProd = function webpackConfigProd() { // env
  return webpackMerge(
    commonWebpackConfig(), {
      mode: 'production',
      /* connects to the server to receive notifications when the bundle rebuilds and then
      * updates your client bundle accordingly. */
      entry: ['webpack-hot-middleware/client?http://localhost:3000'],
      output: {
        path: path.join(__dirname, '../client/dist/public'),
        chunkFilename: "[name].[hash].js",
        filename: "[name].[hash].js",
        sourceMapFilename: '[name].map',
        publicPath: '/', // Tweak this to match your project name/url
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    generateSourceMaps({ type: 'source-map' }),
    // exTractCss({ use: ['css-loader', 'resolve-url-loader', 'sass-loader'] }),
    loadSCSS(),
    loadImages({
      options: {
        limit: 15000,
        name: "[name].[hash:4].[ext]",
      },
    }),
    loadVideos({ options: { limit: 10000, mimetype: "video/mp4" } }),
    {
      optimization: {
        splitChunks: {
          chunks: "initial",
        },
        runtimeChunk: {
          name: "manifest",
        },
        // minimizer: [
        //  new UglifyWebpackPlugin({
        //    uglifyOptions: {
        //      compress: {
        //        drop_console: true,
        //      },
        //    },
        //  }),
        // ],
      },
    },
    clean([
      '../../client/dist/public/*.js',
      '../../client/dist/public/*.html',
      '../../client/dist/public/css/*.*',
    ]),
    minifyJs(),
    minifyCss({
      options: {
        discardComments: {
          removeAll: true,
        },
        // Run cssnano in safe mode to avoid potentially unsafe transformations.
        safe: true,
      },
    }),
  );
};

module.exports = webpackConfigProd;
