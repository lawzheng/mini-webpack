const fs = require('fs')

class HtmlReloadPlugins {
  run(compiler) {
      compiler.hooks.afteremit.tap('HtmlReloadPlugins', function(res) {
          let content = fs.readFileSync('./public/index.html', 'utf8')
          content = content.replace('main.js', `main.${res}.js`);
          fs.writeFileSync( './dist/index.html', content)
      })
  }
}

module.exports = HtmlReloadPlugins;