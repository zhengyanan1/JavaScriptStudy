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
                use:[
                    './loaders/demo/test1',
                    './loaders/demo/test2',
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    mode: 'development'
}