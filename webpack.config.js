const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  // node: {
  //   fs: "empty",
  //   process: false
  // },
  plugins: [
    // https://webpack.js.org/plugins/environment-plugin/
    // new webpack.EnvironmentPlugin(['API_KEY']) or new webpack.EnvironmentPlugin({ API_KEY: '2454706d' })
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development"),
        API_KEY: JSON.stringify('2454706d')
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
