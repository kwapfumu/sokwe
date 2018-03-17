const loadSCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        // chain the the folowing loader to immediately apply all styles to the DOM
        use: [
          // creates styles nodes from js strings
          { loader: "style-loader" },
          // translates css into CommonJs
          {
            loader: "css-loader",
            options: {
              // modules: true,
              // camelCase: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          { loader: "resolve-url-loader" },
          // compiles Sass to css
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});

module.exports = loadSCSS ;
