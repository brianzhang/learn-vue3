const path  = require('path');
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
  }
}
