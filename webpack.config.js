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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader' 
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('build/[name]/style.css')
    ]
};