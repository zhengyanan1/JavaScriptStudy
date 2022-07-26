const path = require("path")

const {DefinePlugin} = require("webpack")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')


const getStyleLoaders = (pre)=>{
    return [
        "vue-style-loader",
        "css-loader",
        {
            // 处理兼容性问题，配合package.json中的browserslist来指定兼容性
            loader: 'postcss-loader',
            options:{
                postcssOptions:{
                    plugins:[
                        "postcss-preset-env"
                    ],
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: undefined,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        assetModuleFilename: 'statuc/media/[hash:10][ext][query]'
    },

    module:{
        rules:[
            // handle css
            {
                test: /\.css$/,
                use: getStyleLoaders()
            },
            {
                test: /\.less$/,
                use: getStyleLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders("sass-loader")
            },
            {
                test: /\.styl$/,
                use:getStyleLoaders("stylus-loader")
            },
            // handle images
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                type: 'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 10 * 1024, // 小于=10kb，图片转换成base64字符串
                    }
                }
            },
            // handle other resources
            {
                test: /\.(woff2?|ttf)$/,
                type: 'asset/resource',
            },
            // handle js
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                loader: 'babel-loader',
                options:{
                    cacheDirectory: true,
                    cacheCompression: false,
                },
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // handle html
    plugins:[
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new VueLoaderPlugin(),
        // corss-env定义的环境变量给打包工具使用
        // DefinePlugin定义环境变量给源代码使用，从而解决vue3页面警告的问题
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        })
    ],

    mode:'development',
    devtool: 'cheap-module-source-map',
    optimization:{
        splitChunks:{
            chunks: 'all',
        },
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        }
    },
//  webpack解析模块加载选项
    resolve: {
        extensions: [".vue", ".js", ".json"],
    },
    devServer:{
        host: 'localhost',
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true,
    }
}