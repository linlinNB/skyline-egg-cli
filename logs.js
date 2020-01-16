const chalk = require('chalk');

module.exports = {
  success(message) {
    console.log(chalk.green(`>> ${message}`));
  },
  error(errInfo) {
    console.log(chalk.red(`>> ${errInfo}`));
  }
};
