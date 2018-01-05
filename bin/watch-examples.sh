#!/usr/bin/env bash

webpack --config webpack.config.examples.js --watch

# For production build:
# NODE_ENV=production webpack --config webpack.config.examples.js -p
