const path = require('path');
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
const exTractCss = require('./parts/extractCss');
const loadImages = require('./parts/loadImages');
const generateSourceMaps = require('./parts/generateSourceMaps');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const clean = require('./parts/clean');
const minifyJs = require('./parts/minifyJs');
const minifyCss = require('./parts/minifyCss');


const webpackConfigProd = function webpackConfigProd(env) {
  return webpackMerge(
    commonWebpackConfig(), {
      mode: 'production',
      output: {
        path: path.join(__dirname, 'client/dist/public'),
        chunkFilename: "[name].[chunkhash:4].js",
        filename: "[name].[chunkhash:4].js",
        sourceMapFilename: '[name].map',
        publicPath: '/', // Tweak this to match your project name/url
      },
    },
    generateSourceMaps({ type: 'source-map' }),
    exTractCss({ use: ['css-loader', 'resolve-url-loader', 'sass-loader'] }),
    loadImages({
      options: {
        limit: 15000,
        name: "[name].[hash:4].[ext]",
      },
    }),
    {
      optimization: {
        splitChunks: {
          chunks: "initial",
        },
        runtimeChunk: {
          name: "manifest",
        },
        minimizer: [
          new UglifyWebpackPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
      },
    },
    clean([
      'client/dist/public/*.js',
      'client/dist/public/*.html',
      'client/dist/public/css/*.*',
    ]),
    minifyJs(),
    minifyCss({
      options: {
        discardComments: {
          removeAll: true,
        },
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true,
      },
    }),
  );
};

module.exports = webpackConfigProd;
