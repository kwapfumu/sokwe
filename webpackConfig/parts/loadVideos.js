const loadVideos = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        // eslint-disable-next-line object-shorthand
        include,
        // eslint-disable-next-line object-shorthand
        exclude,
        // inline base64 URLs for <=8k images, use direct URLs for the rest
        use: {
          loader: "url-loader",
          // eslint-disable-next-line object-shorthand
          options,
        },
      },
    ],
  },
});

module.exports = loadVideos;
