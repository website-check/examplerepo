const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const isDev = process.env.NODE_ENV !== 'production'

const devPort = 8081
module.exports = {
  devServer: {
    port: devPort,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  },
  configureWebpack: {
    output: {
      filename: 'app.js'
    },
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  css: {
    extract: {
      filename: 'app.css'
    },
    loaderOptions: {
      postcss: {
        sourceMap: isDev,
        plugins: [
          autoprefixer, tailwindcss
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options
      })
  }
}
