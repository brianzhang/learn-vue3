const path  = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = process.env.NODE_ENV === "production" ? "./" : "./";

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: path.resolve(__dirname, './main.js'),
  output: {
    publicPath: base,
    filename: 'build.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jp?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              publicPath: base + "/images"
            }
          }
        ]
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
