module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
