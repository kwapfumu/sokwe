const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const clean = require('./parts/clean');
const generateSourceMaps = require('./parts/generateSourceMaps');
const devServerOptions = require('./parts/devServerOptions');
const loadSCSS = require('./parts/loadSCSS');
const loadImages = require('./parts/loadImages');
const loadVideos = require('./parts/loadVideos');

const webpackConfigDev = function webpackConfigDev(env) {
  return webpackMerge(
    commonWebpackConfig(),
    {
      mode: 'development',
      entry: [
        // WebpackDevServer host and port, enables the client portion of dev server
        'webpack-dev-server/client?http://localhost:3000',
        // provides an avenue for our react-hot loader to push updated React components
        // to our application without a refresh, "only" prevents reload on syntax errors
        // 'webpack/hot/only-dev-server'
        'react-hot-loader/patch'
      ],
      plugins: [
        new CleanWebpackPlugin([
          '../../client/dist/public/*.js',
          '../../client/dist/public/*.html',
          '../../client/dist/public/css/*.*',
        ], { root: path.join(__dirname, 'webpack.config'), verbose: true, dry: false }),
        // makes it easier to see which dependencies are being patched
        new webpack.NamedModulesPlugin(),
        // allows the server to push changed JS modules into the browser execution
        // context without a page refresh
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
        }),
      ],
      stats: {
        colors: true,
      },
    },
    generateSourceMaps({ type: 'eval-source-map' }),
    devServerOptions({ host: 'localhost', port: 3000 }),
    loadSCSS(),
    loadImages(),
    loadVideos({ options: { limit: 10000, mimetype: "video/mp4" } }),
    {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: "initial",
        },
      },
    },
  );
};

module.exports = webpackConfigDev;
