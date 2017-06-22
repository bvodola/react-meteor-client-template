const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  },
  module: {
    rules: [
      { test: /\.js$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
      { test: /\.jsx$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
      {
        test: [/\.scss$/,/\.css$/],
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: 'assets/css/[name].css'
          //   }
          // },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig
  ],
  devServer: {
    host: 'localhost',
    port: 4000,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
