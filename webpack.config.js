const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './main.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'pages.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/pages/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'static'),
    }
  }
};
