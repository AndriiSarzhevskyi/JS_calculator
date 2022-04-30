const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'my-webpack-project.bundle.js',
    },
     resolve: {
         extensions: ['.js', '.jsx','.ts','.tsx','.scss','.css'],
         alias: {
             Create: path.resolve(__dirname,'./src/create'),
             Util: path.resolve(__dirname,'./src/util'),
         },
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader'] },
            { test: /\.mathjs?$/, use: 'mathjs-webpack-loader' },
            { test: /\.png|jpg|jpeg|svg$/, use: {
                loader: 'file-loader',
                options: {
                    name: "[hash].[ext]",
                    outputPath: "/src/assets",
                    useRelativePath: true,
                }
            }
        }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}), 
        new MiniCssExtractPlugin({ filename: '[name].[hash].css'}),],

};