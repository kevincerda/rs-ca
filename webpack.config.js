const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.(eot|ttf|woff2?|otf|svg)$/,
        loaders: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fa-icons'
        }
      }
    ]
  }
};
