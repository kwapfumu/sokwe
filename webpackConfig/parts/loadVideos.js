const loadVideos = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
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
