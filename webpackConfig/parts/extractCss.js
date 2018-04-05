// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/* You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser
* takes a while to load JavaScript and the styles would be applied only then. Separating
* CSS to a file of its own avoids the problem by letting the browser to manage it separately.
* Webpack provides a means to generate a separate CSS bundles using ExtractTextPlugin. It can
* aggregate multiple CSS files into one. For this reason, it comes with a loader that handles
* the extraction process. The plugin then picks up the result aggregated by the loader and emits
* a separate file. Due to this process, ExtractTextPlugin comes with overhead during the compilation
* phase. It doesn't work with Hot Module Replacement (HMR) by design. Given the plugin is used only
* for production, that is not a problem.
* ExtractTextPlugin.extract accepts use and fallback definitions. ExtractTextPlugin
* processes content through use only from initial chunks by default and it uses fallback
* for the rest. It doesn't touch any split bundles unless allChunks: true is set true.
* If you wanted to extract CSS from a more involved format, like Sass, you would have to
* pass multiple loaders to the use option. Both use and fallback accept a loader (string),
* a loader definition, or an array of loader definitions.
*/
const extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const XtractTxtPlugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    allChunks: true,
    filename: '../../client/dist/public/css/sokweStyles.[hash].css',
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
