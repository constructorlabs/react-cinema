const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         loader: require.resolve('babel-loader')
//       }
//     ]
//   }
// };



      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: ['babel-plugin-transform-object-rest-spread'] // added
        }
      // query: {
      //   presets:[ 'es2015', 'react', 'stage-2' ]
      // }
    }
  ]
}
}