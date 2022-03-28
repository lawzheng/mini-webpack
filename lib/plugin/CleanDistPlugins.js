const delFileFolderByName = require('../utils').delFileFolderByName

class CleanDistPlugins {
  run(compiler) {
    // 将自身方法订阅到hook以备使用
    //假设它的运行期在编译完成之后
    compiler.hooks.beforeCompile.tap('CleanDistPlugins', function (res) {
      delFileFolderByName('./dist/');
    })
  }
}

module.exports = CleanDistPlugins;