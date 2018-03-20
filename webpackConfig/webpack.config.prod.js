
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
const exTractCss = require('./parts/extractCss');


const webpackConfigProd = function webpackConfigProd(env) {
  return webpackMerge(commonWebpackConfig(), {
    mode: 'production',
    devtool: 'inline-source-map',
    exTractCss({ use: ['css-loader', 'resolve-url-loader', 'sass-loader'] }),

  });
};

module.exports = webpackConfigProd;
