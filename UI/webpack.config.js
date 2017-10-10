const path = require('path');
const webpack = require('webpack');

const PUBLIC = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(PUBLIC, 'js', 'app.js'),
  output: {
    path: path.join(PUBLIC, 'js'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    publicPath: '/public/js/',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920
            }
          }
        ]
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
