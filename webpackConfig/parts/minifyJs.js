const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const minifyJs = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
});
module.exports = minifyJs;
