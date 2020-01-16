const fs = require('fs');
const path = require('path');
const fuzzy = require('fuzzy');// 模糊查询
const jsonFormat = require('json-format');// json解析
const inquirer = require('inquirer');

// 当前项目配置目录
const Log = require('../logs');
const Utils = require('../utils');
let BaseConfigPath = require('../config');

// 创建页面
async function createBaseJS(name, modulePath) {
  // 模板文件路径
  let templateRoot = path.join(BaseConfigPath.template, modulePath);
  console.log('---- Utils = ', Utils);
  if (!Utils.checkFileIsExists(templateRoot)) {
    Log.error(`未找到模板文件， 请检查当前模板文件目录templatePath是否正确， path: ${templateRoot}`);
    return;
  }

  // 项目文件夹路径
  let originRoot = path.join(BaseConfigPath.entry, '/app', modulePath);

  console.log('---- 拼接的originRoot = ', originRoot);

  // 查看文件夹是否存在
  let isExists = await Utils.checkFileIsExists(originRoot);

  if (isExists) {
    Log.error(`当前js文件已经存在，请重新确认originPath: ${originRoot}`);
    return;
  }

  // 复制文件
  let files = await Utils.readDir(templateRoot);
  console.log('---- 复制文件路径 = ', `${originRoot}/${name}}`);
  await Utils.copyFilesInArray(templateRoot, `${originRoot}/${name}}`, files);

  // 结果成功
  Log.success(`测试创建js成功 = ` + originRoot);
}

// 定义交互的问题
let question = [
  // 创建什么类型的baseJS文件，比如service\controller\router这种
  {
    type: 'list',
    name: 'mode',
    message: '请选择创建模板类型',
    choices: [
      'controller',
      'service',
      'router',
      'service/controller/router'
    ]
  },
  // 设置创建之后的文件名称
  {
    type: 'input',
    name: 'name',
    message: answer => `设置${answer.mode}的名字(比如: test)`,
    validate(input) {
      let done = this.async();
      // 输入不为空
      if (input === '') {
        done('必须输入文件名！！');
        return;
      }

      // 此处缺乏校验
      /** TODO List */

      done(null, true);
    }
  }
];

module.exports = function () {
  // 执行创建baseJS的交互问题
  inquirer.prompt(question).then(answers => {
    let { mode, name } = answers;
    let modulePath = mode;
    switch (mode) {
      case 'controller':
        createBaseJS(name, modulePath);
        break;
      case 'service':
        createBaseJS(name, modulePath);
        break;
      case 'router':
        createBaseJS(name, modulePath);
        break;
      case 'service/controller/router':
        let modulePathList = mode.split('/');
        createBaseJS(name, modulePathList[0]);
        createBaseJS(name, modulePathList[1]);
        createBaseJS(name, modulePathList[2]);
        break;
    }
  })
}
