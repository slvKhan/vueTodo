const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
   resolve: {
      alias: {
         '@': path.join(__dirname, 'src/js/frontend'),
      }
   }
}