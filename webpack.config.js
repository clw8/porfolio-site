const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let css =  {
    test: /\.css$/,
    // use: [
    //   'style-loader',
    //   'css-loader'
    // ],
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader',
        options: {importLoaders: 1},
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            plugins: [
              require('autoprefixer')
            ]
          }
        },
      },
    ]
  };

let babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  };

  let img = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
  }

  let html = {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
        options: { minimize: true }
      }
    ]
  }

module.exports = {
  entry: './js/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [ babel, css, img, html]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    })
  ],
};