const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const config = {
  entry: "./app/index.js",
  output: {
  	path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
    	{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    	{ test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};

module.exports = config;