const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY)
      }
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve('babel-loader')
      }
    ]
  }
};
