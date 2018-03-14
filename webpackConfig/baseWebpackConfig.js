// const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const baseWebpackConfig = function baseWebpackConfig() {
  return {
    entry: [
      'babel-polyfill',
      './client/src/app/index.js',
    ],
    output: {
      path: path.join(__dirname, 'client/dist/public'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },
    // for file location resolution.
    resolve: {
      extensions: ['.js', '.json', '.scss'],
      modules: [path.resolve(__dirname, 'client/src/app'), 'node_modules'],
    },
    module: {
      // Shut off warnings about using pre-built javascript files
      // as Quill.js unfortunately ships one as its `main`.
      noParse: /node_modules\/quill\/dist/,
      rules: [
        {
          test: /\.(js)$/,
          include: [
            // files to apply this loader to
            path.join(__dirname, '/client/src/app'),
          ],
          exclude: /(node_modules|bower_components)/,
          // loaders process from right to left
          loaders: ['react-hot-loader/babel', 'babel-loader', 'eslint-loader'],
        },
        {
          test: /\.scss$/,
          // chain the the folowing loader to immediately apply all styles to the DOM
          use: [
            // creates styles nodes from js strings
            { loader: "style-loader" },
            // translates css into CommonJs
            {
              loader: "css-loader",
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true,
              },
            },
            // compiles Sass to css
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            // inline base64 URLs for <=8k images, use direct URLs for the rest
            {
              loader: 'url-loader',
              options: { limit: 8192 },
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "initial",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    plugins: [
      new HtmlPlugin({
        title: 'Sokwe',
        template: 'client/src/app/index.html',
        // favicon:'client/dist/public/assets/favicon.ico',
        inject: 'head',
        chunksSortMode: 'dependency',
      }),
    ],
  };
};

module.exports = baseWebpackConfig;
