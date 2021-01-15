#!/usr/bin/env node
const program = require('commander');

const helpOptions = require('./lib/core/help');
// const createCommands = require('./lib/core/create');

// 查看版本号
// require 加载文件，取里面的信息就好了
program.version(require('./package.json').version);

// 帮助和可选信息
helpOptions();

// 创建其他指令
// createCommands();

program.parse(process.argv);