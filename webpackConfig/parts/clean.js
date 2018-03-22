const CleanWebpackPlugin = require('clean-webpack-plugin');

const clean = (path) => ({
  plugins: [new CleanWebpackPlugin(path)],
});

module.exports = clean;
