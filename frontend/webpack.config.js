const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const inProduction = (process.env.NODE_ENV === 'production')
const buildPath = path.resolve(__dirname, './.build/')

module.exports = {
  entry: {
    styles: './assets/sass/app.scss',
    fonts: './assets/sass/fonts.scss',
    app: './entries/app.js',
    bootstrap: './assets/sass/custom_bootstrap.scss',
    mdb: './assets/sass/custom_mdb.scss',
    vendor: [
      'react', 'react-dom', 'react-redux', 'redux-thunk', 'immutable',
      'js-cookie', 'isomorphic-fetch',
    ],
  },

  output: {
    path: buildPath,
    filename: './bundles/[name]-[hash].js',
  },

  plugins: [
    new CleanWebpackPlugin(['.build']),
    new webpack.optimize.CommonsChunkPlugin({name: 'react'}),
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin({
      filename: `css/[name]-[hash].css`,
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/fonts/',
        to: `${buildPath}/fonts/`,
      },
      {
        from: 'node_modules/font-awesome/',
        to: `${buildPath}/vendor/font-awesome/`,
      },
      {
        from: 'node_modules/mdbootstrap/js/bootstrap.min.js',
        to: `${buildPath}/vendor/bootstrap/`,
      },
      {
        from: 'node_modules/mdbootstrap/css/bootstrap.min.css',
        to: `${buildPath}/vendor/bootstrap/`,
      },
      {
        from: 'node_modules/mdbootstrap/js/jquery-3.2.1.min.js',
        to: `${buildPath}/vendor/jquery/`,
      },
      {
        from: 'node_modules/mdbootstrap/js/mdb.min.js',
        to: `${buildPath}/vendor/mdb/`,
      },
      {
        from: 'node_modules/mdbootstrap/js/popper.min.js',
        to: `${buildPath}/vendor/popper/`,
      },
    ]),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                'node_modules/mdbootstrap/sass/',
                'node_modules/bootstrap/scss/'
              ],
                outputStyle: 'compressed',
              },
            }
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
}

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}
