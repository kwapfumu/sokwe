
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
const exTractCss = require('./parts/extractCss');
const loadImages = require('./parts/loadImages');
const generateSourceMaps = require('./parts/generateSourceMaps');
const clean = require('./parts/clean');


const webpackConfigProd = function webpackConfigProd(env) {
  return webpackMerge(
    commonWebpackConfig(), {
      mode: 'production',
    },
    generateSourceMaps({ type: 'source-map' }),
    exTractCss({ use: ['css-loader', 'resolve-url-loader', 'sass-loader'] }),
    loadImages({
      options: {
        limit: 15000,
        name: ".[name].[ext]",
      },
    }),
    {
      optimization: {
        splitChunks: {
          chunks: "initial",
        },
      },
    },
    clean([
      'client/dist/public/*.js',
      'client/dist/public/*.html',
      'client/dist/public/css/*.*',
    ]),
  );
};

module.exports = webpackConfigProd;
