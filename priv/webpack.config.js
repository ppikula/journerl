var webpack = require('webpack');
var path = require('path');

var config = {

    // We split the entry into two specific chunks. Our app and vendors. Vendors
    // specify that react should be part of that chunk
    entry: {
        app: ['./app/main.jsx'],
        vendors: ['jquery', 'underscore','react', 'd3', 'flot']
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")],
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            _: "underscore"
        })
    ],
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        noParse: [],
        loaders: [
            { test: path.join(__dirname, 'app'),
              loader: 'babel',
              query: {presets: ['es2015', 'react']}
            },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.css$/, loaders: ["style", "css"] },
            { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    }
};

module.exports = config;
