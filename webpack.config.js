const path=require("path");
const outputDir="./build/";
const webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const isDevBuild = true;

module.exports={
    mode:"development",
    entry:{
        main:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,outputDir),
        filename:"[name].js",
        publicPath:"/build/",
    },
    resolve: { extensions: ['.web.js', '.js', '.json', ".jsx"] },
    module:{
        rules:[
            {
                test:/(\.js$)|(\.jsx$)/,
                include:[
                    path.resolve(__dirname,"src")
                ],
                exclude:[
                    path.resolve(__dirname,"node_modules")
                ],
                loader:"babel-loader"
            },
            {
                test:/\.css(\?|$)/,
                include:[
                    path.resolve(__dirname,"src")
                ],
                exclude:[
                    path.resolve(__dirname,"node_modules")
                ],
                loader:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./public/vendor-manifest.json')
        }),
        new ExtractTextPlugin('[name].css',{allChunks: true})
    ].concat(isDevBuild ? [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', 
            moduleFilenameTemplate: path.relative("./build", '[resourcePath]')
        })
    ] : [
        // Plugins that apply in production builds only
        new webpack.optimize.UglifyJsPlugin(),
    ]),
    devServer: {
        contentBase: "./public",
        // hotOnly: true
      }
}