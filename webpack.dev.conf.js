const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
        
    // 入口文件
    entry: [
        path.resolve(__dirname, "src/index.js")
    ],

    // 输出文件路径
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[chunkhash:8].bundle.js"
    },

    // babel解析
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    // 别名
    resolve: {
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            api: path.join(__dirname, 'src/api'),
            components: path.join(__dirname, 'src/components'),
            pages: path.join(__dirname, 'src/pages'),
            images: path.join(__dirname, 'src/images'),
            reducers: path.join(__dirname, 'src/reducers'),
            router: path.join(__dirname, 'src/router'),
            utils: path.join(__dirname, 'src/utils')
        }
    },

    // 服务器
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '192.168.1.31',
        port: 8000
    },

    // 插件
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash:8].css'
        })
    ]
};