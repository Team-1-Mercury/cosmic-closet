const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  plugins: [
    new Dotenv(),
    new CompressionPlugin(),
  ],
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      /*
      Our original css test
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
      */
      // new css test to include sass
      {
        // looks for sass OR css files on import
        test: /\.(css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // This line below is needed for Webpack to play nicely with React Router
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
