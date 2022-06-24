const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(null || env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
module.exports = {
  plugins: [new webpack.DefinePlugin(envKeys)],

  mode: 'development',
  entry: './index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js',
  },
  devServer: {
    static: __dirname,
    compress: true,
    // host: '0.0.0.0',
    port: 8080, // port for dev server
  },
  watch: process.env.NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
