#!/usr/bin/env bash

#    _    _
# ,-(|)--(|)-.
# \_   ..   _/ Slytherin: Framework-independent slithering utility.
#   \______/              Makes things draggable.
#     V  V
#
# This project is a part of the “Byte-Sized JavaScript” videocasts.
#
# You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
# MIT Licensed — See LICENSE.md
#
# Send your comments, suggestions, and feedback to me@volkan.io
#

webpack --config webpack.config.examples.js --watch

# For production build:
# NODE_ENV=production webpack --config webpack.config.examples.js -p
