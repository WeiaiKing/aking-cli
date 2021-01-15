const program = require('commander');

const helpOptions = () => {
  // 增加自己的options
  program.option('-ak --Ak', 'a aking cli');
  // 这个<> 尖括号要注意一下
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components')
  // 根据不同的名字，拉取不同的代码
  program.option('-f --framework <framework>', 'your frameword')

  program.on('--help', function () {
    console.log("");
    console.log("Other:")
    console.log("  other options~");
  })
}

module.exports = helpOptions;