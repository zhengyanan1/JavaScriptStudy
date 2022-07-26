const path = require("path")

const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin= require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin= require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin= require("terser-webpack-plugin")
const ImageMinimizerPlugin= require("image-minimizer-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const isProduction = process.env.NODE_ENV == "production"

const getStyleLoaders = (pre)=>{
    return [
        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
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
        path: isProduction ?  path.resolve(__dirname, "../dist") : undefined,
        filename: isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
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
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "../src"),
                loader: 'babel-loader',
                options:{
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: [
                        !isProduction && require.resolve('react-refresh/babel')
                    ].filter(Boolean) ,// 激活js的 HMR
                },
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
        !isProduction && new ReactRefreshPlugin()
    ].filter(Boolean),

    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    optimization:{
        splitChunks:{
            chunks: 'all',
        },
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        },
        // 是否进行压缩
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
        extensions: [".jsx", ".js", ".json"],
    },

    devServer:{
        host: 'localhost',
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true,
    }
}