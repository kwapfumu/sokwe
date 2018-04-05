const PurifyCSSPlugin = require("purifycss-webpack");

// It's essential the plugin is used after the ExtractTextPlugin; otherwise, it doesn't work:
const purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })],
});

module.exports = purifyCSS;
