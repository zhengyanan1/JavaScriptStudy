const path = require("path")
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

// 获取处理样式的loader...
function getStyleLoader(pre){
    return [
        MiniCssExtractPlugin.loader, // 将js中css 通过创建style标签添加到html文件中
        "css-loader",  // 将css编译成commonjs的模块到js中
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容问题 
                    ]
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"),//绝对路径
        // 入口文件打包输出的文件名
        filename: 'static/js/main.js',
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
            {
                test: /\.css$/,
                use:getStyleLoader()  //执行顺序从下到上
            },
            {
                test: /\.less$/,
                use: getStyleLoader('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoader('sass-loader')
            },
            {
                test: /\.styl$/,
                use: getStyleLoader('stylus-loader')
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',      //转base64
                parser:{
                    dataUrlCondition:{
                        // 小于10kb图片转base64编码。
                        // 优点：减少请求数量；缺点：体积会更大
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                generator: {
                    filename: 'static/images/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[hash:10][ext][query]'
                }
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,  // 排出node_modules下的文件，其他文件都处理
                include: path.resolve(__dirname, "../src"), //只处理src下的文件，其他文件不处理
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,  // 开启babel缓存
                    cacheCompression: false, //关闭缓存文件压缩
                }
            }
        ]
    },
    // 插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: "node_modules",   // 默认值,
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        }),
        new CssMinimizerPlugin()
    ],

    // 模式
    mode: 'production',
    devtool: 'source-map'
}