
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js')
const path = require("path");

module.exports = merge(common, {
     mode: 'development',
     devtool: 'inline-source-map',
     devServer: {
         static: {
           directory: path.join(__dirname, 'public'),
         },
        //  compress: true,
         port: 3005,
     },

 });