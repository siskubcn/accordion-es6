'use strict';

var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'source-map',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.resolve(__dirname, './src/js')]
    },
    stats: {
            colors: true,
            modules: true,
            reasons: true,
            errorDetails: true
          }
};


