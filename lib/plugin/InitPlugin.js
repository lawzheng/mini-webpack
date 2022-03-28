class InitPlugin {
  run(compiler) {
    // 将的在执行期放到刚开始解析入口前
    compiler.hooks.entryInit.tap('Init', function (res) {
      console.log('前端小伙子，编译开始咯。');
    })
  }
}
module.exports = InitPlugin;