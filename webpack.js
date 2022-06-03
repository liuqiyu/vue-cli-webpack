const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname,'./dist')  // 打包后的目录
    },
    devServer:{
        //设置端口号
        port:3000,
        //开启热更新
        hot:true,
        //告诉服务器内容来源
        contentBase:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] // 从右向左解析原则
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          template:path.resolve(__dirname,'./public/index.html')
        }),
        new CleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}