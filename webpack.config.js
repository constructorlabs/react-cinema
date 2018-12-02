const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  // node: {
  //   fs: "empty"
  // },
  plugins: [
    // https://webpack.js.org/plugins/environment-plugin/
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    })
    // new webpack.EnvironmentPlugin(['API_KEY'])
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
