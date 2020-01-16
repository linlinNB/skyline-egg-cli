/**
 * 作用: 当前项目的工具库，比如创建文件，删除文件，嗯，你懂得
 */
const fs = require('fs');
const path = require('path');
  /**
   * 作用: 查看文件、文件夹是否存在
   * @param path
   * @returns {*}
   */
  function checkFileIsExists(path) {
    console.log('--- 检验checkFileIsExists = ', path);
    return fs.existsSync(path);
  };

  /**
   * 作用: 创建文件夹
   * @param src
   * @returns {Promise<unknown>}
   */
  function createDir(src){
    return new Promise(resolve => {
      fs.mkdir(src, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
        return resolve();
      })
    })
  };

  /**
   * 作用: 读取特定路径下的文件信息
   * @param path
   * @returns {Promise<unknown>}
   */
  function readDir(path) {
    return new Promise(resolve => {
      fs.readdir(path, (err, files) => {
        if (err) {
          throw err;
        }
        return resolve();
      })
    })
  };

  /**
   * 作用: 复制文件
   * @param originPath
   * @param curPath
   * @returns {Promise<unknown>}
   */
  function copyFile(originPath, curPath) {
    return new Promise(resolve => {
      fs.copyFile(originPath, curPath, fs.constants.COPYFILE_EXCLfs.constants.COPYFILE_EXCL, (err)=> {
        if (err) {
          throw err;
        }
        return resolve('copyFile 复制文件成功!!!!');
      })
    })
  };

  /**
   * 作用: 批量复制文件
   * @param originPath
   * @param curPath
   * @param arr
   * @returns {Promise<unknown>}
   */
  function copyFilesInArray(originPath, curPath, arr) {
    return new Promise(async resolve => {
      let extName = '';
      for (const fileItem of extName) {
        extName = path.extname(fileItem);
        await this.copyFile(`${originPath}/${fileItem}`, curPath + extName);
      }
      return resolve('copyFilesInArray 批量复制 成功!!!!');
    })
  };

  module.exports = {
    checkFileIsExists,
    copyFile,
    copyFilesInArray,
    createDir,
    readDir,
  };
