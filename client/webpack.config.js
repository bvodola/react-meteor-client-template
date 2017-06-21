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
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-native-tab-view')
        ],
        loader: 'babel-loader?+cacheDirectory'
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
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
      'react-native': 'react-native-web',
      'react-navigation': 'react-navigation/lib/react-navigation.js'
    }
  }
}
