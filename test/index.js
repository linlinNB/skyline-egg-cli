const { copyFilesInArray, readDir } = require('../utils');
const test = async () => {
  const files = await readDir('template/controller');
  await copyFilesInArray('template/controller', './test/wocao', files);
};

test();
