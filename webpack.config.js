
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

//引入extractTextPlugin
//把css抽离出来单独打包
var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    'entry': {
        'index': path.join(__dirname, 'src/js/index.js')
    },

    'output': {
        'path': path.join(__dirname, 'dist/'), //出口的根目录
        'filename': 'js/[name].[id].bundle.js'
    },

    'module': {
        'loaders': [
            {
                'test': /\.css$/,
                // loader: [
                //     'style-loader',
                //     'css-loader'
                // ]
                loader: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },    
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: 'img:src img:data-src'
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                // loader: [
                //     'url-loader?limit=8192&name=./images/[hash].[ext]'
                // ]
                //新语法 使用use
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '8192',
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'http://localhost:9000/'//配置cdn地址
                        }
                    }
                ]
            }
        ]
    },

    'plugins': [
        //虽然 plugins 配置在最下面，解析的时候肯定是先在
        new extractTextPlugin('css/[name].css'),

        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: path.join(__dirname, 'dist/index.html'),
            chunks: ['index']
        }),

    ]
}