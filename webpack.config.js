const path = require("path");
const outputDir = "./build/";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevBuild = true;

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/build/"
    },
    resolve: { extensions: ['.web.js', '.js', '.json', ".jsx"] },
    module: {
        rules: [
            {
                test: /(\.js$)|(\.jsx$)/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: 'build'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./public/vendor-manifest.json')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })

        //new ExtractTextPlugin('[name].css',{allChunks: true})
    ].concat(isDevBuild ? [
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[file].map', 
        //     moduleFilenameTemplate: path.relative("./build", '[resourcePath]')
        // })
    ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
        ]),
    devServer: {
        contentBase: "./public",
        hot: true
    }
}