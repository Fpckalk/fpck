const config = require('dotenv').config();
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    "main": [
      "./assets/scripts/main.js",
      "./assets/styles/main.scss",
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname,
              }
            }
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: '[name].[ext]?[hash]'
            }
          }
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
    }),
    new CopyWebPackPlugin([
      { from: 'assets/static', to: 'static' }
    ]),
    new BrowserSyncPlugin({
      host: process.env.HOST,
      port: process.env.PORT,
      proxy: process.env.PROXY,
      files: [
        {
          match: [
            // './dist/scripts/*.js',
            './dist/styles/*.css'
          ],
          fn: (event, file) => {
            if (event == 'change') {
              const bs = require("browser-sync").get("bs-webpack-plugin");
              if (file.split('.').pop()=='js' || file.split('.').pop()=='php' ) {
                bs.reload();
              } else {
                bs.reload("*.css");
              }
            }
          }
        }
      ],
    },{
      reload: false,
    }),
  ],
};