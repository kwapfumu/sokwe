// eslint-disable-next-line import/no-extraneous-dependencies
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const minifyJs = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
});
module.exports = minifyJs;
