const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   module: {
      rules: [
         {
            test: /\.vue$/,
            loader: 'vue-loader',
         },
         {
            test: /\.js$/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         }
      ],
   },
   plugins: [
      new VueLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
   resolve: {
      alias: {
         '@': path.join(__dirname, 'src/js/frontend'),
      }
   },
   devServer: {
      port: 4200,
      contentBase: path.join(__dirname, 'src/html_templates'),
      watchContentBase: true,
      hot: true
    },
}