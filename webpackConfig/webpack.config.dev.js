const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// repeated conf options in both prod and dev environments
const commonWebpackConfig = require('./baseWebpackConfig');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const webpackConfigDev = function webpackConfigDev(env) {
  return webpackMerge(commonWebpackConfig(), {
    mode: 'development',
    entry: [
      // WebpackDevServer host and port, enables the client portion of dev server
      'webpack-dev-server/client?http://127.0.0.1:8080',
      // provides an avenue for our react-hot loader to push updated React components
      // to our application without a refresh, "only" prevents reload on syntax errors
      'webpack/hot/only-dev-server'
    ],
    plugins: [
      new CleanWebpackPlugin([
        'client/dist/public/*.js',
        'client/dist/public/*.html',
        'client/dist/public/css/*.*',
      ], { root: path.join(__dirname, 'webpack.config'), verbose: true, dry: true }),
      // new webpack.optimize.OccurenceOrderPlugin(),
      // makes it easier to see which dependencies are being patched
      new webpack.NamedModulesPlugin(),
      // allows the server to push changed JS modules into the browser execution
      // context without a page refresh
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      port: 8080,
      host: 'localhost',
      hot: true,
      historyApiFallback: true,
      // inline: true,
      noInfo: false,
      open: 'Chrome',
      openPage: 'about',
      overlay: {
        errors: true,
        warnings: true,
      },
      /* With a backend on localhost:3000 , you can use this to enable proxying
      * // proxy:{"/api": "http://127.0.0.1:3000"},
      * A request to /api/users will now proxy the request to http://localhost:3000/api/users */
      stats: 'minimal',
      publicPath: path.join(__dirname, '/client/dist/public/'),
      contentBase: path.join(__dirname, 'client/dist/public'),
      watchContentBase: true,
    },
    stats: {
      colors: true,
    },
  });
};

module.exports = webpackConfigDev;
