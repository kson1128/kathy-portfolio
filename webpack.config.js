module.exports = {
  // mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js',
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
