#!/usr/bin/env node

console.log('---- hello World!!!! ----');

// 获取版本号
const version = require('./package').version;
// 获取commander
const program = require('commander');
const path = require('path');
const chalk = require('chalk');
const Utils = require('./utils');
const Log = require('./logs');

const createProgramFs = require('./lib/createProgramFs');

const baseConfigPath = require('./config');

// 设置版本号
program.version(version, '-v, --version');

// 设置task任务, 比如创建对应js
program.command('create')
  .description('创建测试js到对应目录')
  .action((cmd, options) => {
    createProgramFs();
  });

program.parse(process.argv);
