
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: './src/js/index.js',
    output: {
        filename: "bundler.js",
        path: path.resolve(__dirname, 'content/js'),
        publicPath: "/content/js"
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}