/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    main:'./src/Index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "/"
  },
  mode:"development",
  module: {
    rules: [
      {test: /\.tsx?$/,use: 'ts-loader',exclude: /node_modules/},
      { test: /\.css$/, use: [
        { loader: 'style-loader'},
        {loader: 'css-loader', 
          options: { 
            // modules: true 
            modules: {
              localIdentName: "[local]--[hash:base64:5]",
            },
          }
        }
        ] 
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      modals: path.resolve(__dirname, 'src/modals/'),
      components: path.resolve(__dirname, 'src/components/'),
      ui: path.resolve(__dirname, 'src/ui/'),
    },
    
  },
  devServer: {
    static: './dist',
    historyApiFallback: true
  },
   plugins: [
     new HtmlWebpackPlugin({template: './src/index.html'}),
   ],
};