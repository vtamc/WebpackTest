var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        filename: "build/bundle.js"
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
                    use: 'css-loader' 
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('build/bundle.css')
    ]
};