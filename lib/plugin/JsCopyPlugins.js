const delFileByName = require('../utils').delFileByName
const fs = require('fs')

class JsCopyPlugins {
  run(compiler) {
      compiler.hooks.afteremit.tap('JsCopyPlugins', function(res) {
          const ranNum = parseInt( Math.random() * 100000000 );
          fs.copyFile('./dist/main.js',`./dist/main.${ranNum}.js`,function(err){
              if(err) console.log('获取文件失败');
              delFileByName('./dist/main.js');
          })
          console.log("重新生成js成功" );
          return ranNum;
      })
  }
}

module.exports = JsCopyPlugins;
