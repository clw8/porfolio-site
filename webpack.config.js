const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let css =  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  };

let babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  };

module.exports = {
  entry: './main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [ css, babel]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ],
};