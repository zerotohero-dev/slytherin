/*    _    _
 * ,-(|)--(|)-.
 * \_   ..   _/ Slytherin: Framework-independent slithering utility.
 *   \______/              Makes things draggable.
 *     V  V
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
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
