const path = require("path")

const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

const getStyleLoaders = (pre)=>{
    return [
        "style-loader",
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
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "../src"),
                loader: 'babel-loader',
                options:{
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: [require.resolve('react-refresh/babel')],// 激活js的 HMR
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
        new ReactRefreshWebpackPlugin()
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