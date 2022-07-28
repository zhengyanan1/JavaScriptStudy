const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/[name].js',
        clean: true,
    },
    module: {
        rules:[
            // {
            //     test: /\.js$/,
            //     loader: "./loaders/test-loader.js"
            // }
            {
                test: /\.js$/,
                // use:[
                //     './loaders/demo/test1',
                //     './loaders/demo/test2',
                // ]
                // loader: './loaders/demo/test3'
                // use:[
                //     "./loaders/demo/test4",
                //     "./loaders/demo/test5",
                //     "./loaders/demo/test6",
                // ]
                loader: "./loaders/clean-log-loader",
            },
            {
                test: /\.js$/,
                loader: './loaders/banner-loader',
                options:{
                    author: "hardenX",
                }
            },
            {
                test: /\.js$/,
                loader: './loaders/babel-loader',
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    mode: 'development'
}