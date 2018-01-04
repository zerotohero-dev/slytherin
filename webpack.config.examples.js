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
    pathinfo: true,
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader'],
        include: [join(__dirname, 'src'), join(__dirname, 'lib')]
      },
      {
        test: /\.js$/,
        include: [join(__dirname, 'src')],
        use: ['babel-loader']
      }
    ]
  }
};
