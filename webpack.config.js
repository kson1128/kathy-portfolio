module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js',
  },
  devServer: {
    static: __dirname,
    compress: true,
    port: 8080, // port for dev server
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
