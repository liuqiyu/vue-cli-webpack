const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map'
})