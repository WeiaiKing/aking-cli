/**
 * 执行终端命令相关的代码
 */
const { spawn } = require('child_process');

// npm install 
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    // 执行命令，获取当前进程
    const childProcess = spawn(...args);
    // 希望安装依赖的信息呢能显示   stdout 标准输出流  pipe 管道
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    })
  })
}

// const commandExec = (...args) => {
//   return new Promise((resolve, reject) => {
//     const childProcess = spawn(...args);
//     childProcess.stdout.pipe(process.stdout);
//     childProcess.stderr.pipe(process.stderr);
//     childProcess.on("close", () => {
//       resolve();
//     })
//   })
// }

module.exports = {
  commandSpawn
}
