const path = require("path")

const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin= require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin= require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin= require("terser-webpack-plugin")
const ImageMinimizerPlugin= require("image-minimizer-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const {DefinePlugin} = require("webpack")

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const isProduction = process.env.NODE_ENV === "production"

const getStyleLoaders = (pre)=>{
    return [
        isProduction ?  MiniCssExtractPlugin.loader : "vue-style-loader",
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
        pre && {
            loader: pre,
            options: pre === "sass-loader" ? 
            {
                additionalData: `@use "@/styles/element/index.scss" as *;`,
            } : {}
        }
    ].filter(Boolean)
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: isProduction ?  path.resolve(__dirname, "../dist") : undefined,
        filename:  isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
        chunkFilename: isProduction ? 'static/js/[name].chunk.[contenthash:10].js' : 'static/js/[name].chunk.js',
        assetModuleFilename: 'statuc/media/[hash:10][ext][query]',
        clean: true,
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
                test: /\.js?$/,
                include: path.resolve(__dirname, "../src"),
                loader: 'babel-loader',
                options:{
                    cacheDirectory: true,
                    cacheCompression: false,
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    // 开启缓存
                    cacheDirectory: path.resolve(__dirname, "../node_modules/.cache/vue-loader")
                }
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
        isProduction && new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:10].css',
            chunkFilename: 'static/css/[name].chunk.[contenthash:10].css'
        }),
        isProduction && new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, "../public"), 
                    to: path.resolve(__dirname, "../dist"),
                    globOptions: {
                        // 忽略index.html
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
        new VueLoaderPlugin(),
        // corss-env定义的环境变量给打包工具使用
        // DefinePlugin定义环境变量给源代码使用，从而解决vue3页面警告的问题
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        // 按需加载elementplus
        AutoImport({
            resolvers: [ElementPlusResolver()],
            }),
            // 自自定义主题
        Components({
            resolvers: [ElementPlusResolver({
                importStyle: 'sass'
            })],
        }),
    ].filter(Boolean),

    mode: isProduction ? 'production': 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    optimization:{
        splitChunks:{
            chunks: 'all',
            cacheGroups:{
                vue:{
                    test: /[\\/]node_modules[\\/]vue(.*)?[\\/]/,
                    name: 'vue-chunk',
                    priority: 40,
                },
                elementPlus: {
                    test: /[\\/]node_modules[\\/]element-plus[\\/]/,
                    name: 'elementPlus-chunk',
                    priority: 30,
                },
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'libs-chunk',
                    priority: 20,
                }
            }
        },
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        },
        minimize: isProduction,
        minimizer:[
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminGenerate,
                  options: {
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["jpegtran", { progressive: true }],
                      ["optipng", { optimizationLevel: 5 }],
                      [
                        "svgo",
                        {
                          plugins: [
                            "preset-default",
                            "prefixIds",
                            {
                              name: "sortAttrs",
                              params: {
                                xmlnsOrder: "alphabetical",
                              },
                            },
                          ],
                        },
                      ],
                    ],
                  },
                },
            }),
        ]
    },
//  webpack解析模块加载选项
    resolve: {
        extensions: [".vue", ".js", ".json"],
        // 路径别名
        alias:{
            '@': path.resolve(__dirname, "../src")
        }
    },

    devServer:{
        host: 'localhost',
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true,
    },

    performance: false,
}