// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const XtractTxtPlugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    // allChunks: true,
    filename: '../client/dist/public/css/sokweStyles.[contenthash:4].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          // eslint-disable-next-line object-shorthand
          include,
          // eslint-disable-next-line object-shorthand
          exclude,
          use: XtractTxtPlugin.extract({
            // eslint-disable-next-line object-shorthand
            use,
            // loader that should be used when the CSS is not extracted
            fallback: "style-loader",
          }),
        },
      ],
    },
    plugins: [XtractTxtPlugin],
  };
};

module.exports = extractCSS;
