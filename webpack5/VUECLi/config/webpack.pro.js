const path = require("path")

const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin= require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin= require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin= require("terser-webpack-plugin")
const ImageMinimizerPlugin= require("image-minimizer-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")


const getStyleLoaders = (pre)=>{
    return [
        MiniCssExtractPlugin.loader,
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
        path: path.resolve(__dirname, "../dist"),
        filename: 'static/js/[name].[contenthash:10].js',
        chunkFilename: 'static/js/[name].chunk.[contenthash:10].js',
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
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:10].css',
            chunkFilename: 'static/css/[name].chunk.[contenthash:10].css'
        }),
        new CopyWebpackPlugin({
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
        })
    ],

    mode:'production',
    devtool: 'source-map',
    optimization:{
        splitChunks:{
            chunks: 'all',
        },
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        },
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
}