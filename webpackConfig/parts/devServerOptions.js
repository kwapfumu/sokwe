const path = require('path');

const devServerOptions = ({ host, port } = {}) => ({
  devServer: {
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    hot: true,
    hotOnly: true,
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
    publicPath: path.join(__dirname, '../../client/dist/public/'),
    contentBase: path.join(__dirname, '../../client/dist/public/'),
    watchContentBase: true,
  },
});
module.exports = devServerOptions;
