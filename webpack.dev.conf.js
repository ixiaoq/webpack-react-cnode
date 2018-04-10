const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    // 入口文件
    entry: [
        path.resolve(__dirname, "src/index.js")
    ],

    // 输出文件路径
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },

    // babel解析
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader?cacheDirectory=true"],
            include: path.join(__dirname, 'src')
        }]
    },

    // 服务器
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: 'localhost',
        port: 8080
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};