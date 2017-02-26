//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        map: ["./src/map/main.js"],
        page: ["./src/page/page.js"]
    },

    output: {
        filename: "build/[name]/entry.js"
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ],

        rules: [
            {
                test: /\.scss|.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" }, 
                        { loader: "sass-loader" }
                    ] 
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "build/[name]/style.css"
        })
    ]
};