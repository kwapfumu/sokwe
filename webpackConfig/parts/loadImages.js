/* Webpack can inline assets by using url-loader. It emits your images as base64
* strings within your JavaScript bundles. The process decreases the number of requests
* needed while growing the bundle size. It's enough to use url-loader during
* development.
* Webpack gives control over the inlining process and can defer loading to
* file-loader. file-loader outputs image files and returns paths to them instead
* of inlining. By default, file-loader returns the MD5 hash of the file's contents
* with the original extension.
* This config defaults to url-loader during development and uses both url-loader
* and file-loader in production to maintain smaller bundle sizes. url-loader uses
* file-loader implicitly when limit is set, and both have to be installed for the
* setup to work. The behavior changes depending on the limit you set.
* Below the limit, it should inline the image while above it should emit a
* separate asset and a path to it. */
const loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        include,
        exclude,
        // inline base64 URLs for <=8k images, use direct URLs for the rest
        use: {
          loader: "url-loader",
          options,
        },
      },
    ],
  },
});

module.exports = loadImages;
