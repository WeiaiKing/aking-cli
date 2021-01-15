const { promisify } = require('util');
const path = require('path');

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile, createDirSync } = require('../utils/utils');

// callback -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
  console.log("why helps you create your project~")

  // 1.clone项目
  await download(vueRepo, project, { clone: true });

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });

  // 4.打开浏览器
  open("http://localhost:8080/");
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1.编译ejs模板 result
  const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() });

  // 2.写入文件的操作
  const targetPath = path.resolve(dest, `${name}.vue`);
  console.log(targetPath);
  writeToFile(targetPath, result);
}

// 添加组件和路由