import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ROOT_DIR = path.resolve(__dirname, '..');
const NODE_MODULES = path.resolve(ROOT_DIR, 'node_modules');
export const BUILT_DIR = path.resolve(ROOT_DIR, 'built');

export default {
  context: ROOT_DIR,
  entry: './app.js',
  output: {
    path: BUILT_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          NODE_MODULES
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue']
  }
}