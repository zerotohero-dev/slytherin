/*
 *
 */

const { join } = require('path');

module.exports = {
  entry: { simpleExample: join(__dirname, 'src/examples/simple/index.js') },
  resolve: { symlinks: false },
  output: {
    path: join(__dirname, 'examples'),
    filename: 'simple/js/bundle.js',
    pathinfo: process.env.NODE_ENV !== 'production',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          join(__dirname, 'src'),
          join(__dirname, 'lib'),
          join(__dirname, 'node_modules/dombili')
        ],
        use: ['babel-loader']
      }
    ]
  }
};
