const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    //设置端口号
    port: 3000,
    //开启热更新
    hot: true,
    //告诉服务器内容来源
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})