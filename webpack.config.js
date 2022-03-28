const path = require('path')
const CleanDistPlugins = require('./lib/plugin/CleanDistPlugins')
const HtmlReloadPlugins = require('./lib/plugin/HtmlReloadPlugins')
const InitPlugin = require('./lib/plugin/InitPlugin')
const JsCopyPlugins = require('./lib/plugin/JsCopyPlugins')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [path.join(__dirname, './lib/loader/less-loader.js')]
      }
    ]
  },
  plugins: [
    new InitPlugin,
    new CleanDistPlugins,
    new JsCopyPlugins,
    new HtmlReloadPlugins
  ]
}

