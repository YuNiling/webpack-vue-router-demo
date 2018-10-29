const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {                                                //代码兼容更多环境
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_module/
            },
            {                                                //将字体文件、图片文件进行模块化
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|ico)$/,
                use: [
                    "file-loader"
                ]
            },                                               
            {                                                //使用vue单文件组件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader', 
                    'css-loader', 
                    'postcss-loader'                       //自动给css代码添加前缀，以适应不同浏览器
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({                            //简化的HTML创建
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname, '../src/assets/img/favicon.ico')
        }),
        new VueLoaderPlugin({                              //让webpack找到vue模块
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            extensions: ['*', '.js', '.json', '.vue']      //引入依赖或者文件的时候可以省略后缀
        })                                 
    ]
};