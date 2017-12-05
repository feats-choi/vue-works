import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './baseConfig.js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';
import { CLIENT_DIR, BUILT_DIR } from './baseConfig.js';

export default merge(baseConfig, {
  entry: {
    app: ['babel-polyfill', `${CLIENT_DIR}/entry.js`]
  },
  output: {
    path: `${BUILT_DIR}/client`,
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      minChunks: function(module){
        return /node_modules/.test(module.context) && !/\.css$/.test(module.request)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: 'common.css'
    }),
    new VueSSRClientPlugin({
      filename: 'index.json'
    })
  ]
})
