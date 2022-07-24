const path = require("path")
const path = require("path")

const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const threads = os.cpus().length // 核心数

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path: undefined,
        // 入口文件打包输出的文件名
        filename: 'static/js/main.js',
        clean: true,
    },
    // 加载器
    module: {
        rules: [{
            oneOf:[
                // loader的配置
                {
                    test: /\.css$/,
                    use:[
                        'style-loader', // 将js中css 通过创建style标签添加到html文件中
                        "css-loader"  // 将css编译成commonjs的模块到js中
                    ]  //执行顺序从下到上
                },
                {
                    test: /\.less$/,
                    use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    ],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                    ],
                },
                {
                    test: /\.styl$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        "stylus-loader", // 将 Stylus 文件编译为 CSS
                    ]
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
                    use:[
                        {
                            loader:'thread-loader', //开启多进程
                            options:{
                                works: threads,  //进程数量
                            }
                        },
                        {
                            loader: 'babel-loader', 
                            options: {
                                cacheDirectory: true,  // 开启babel缓存
                                cacheCompression: false, //关闭缓存文件压缩
                                plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积,
                            }
                        }
                    ]
                }
            ]
        }]
    },
    // 插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: "node_modules",   // 默认值,
            threads,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ],

    devServer:{
        host: 'localhost',
        port: '3000',
        open: true,
        hot: true, // 打开HMR(默认)
    },

    // 模式
    mode: 'development',
    devtool: 'cheap-module-source-map'
}