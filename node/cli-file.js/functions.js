const fs = require("fs");
const getDirName = require("path").dirname;
/**
 * @name createFile
 * 
 * @param {string} func - desc
 * @param {string} content - desc
 * @param {function} cb - callback
 */

function createFileRecursively(path, content) {
  fs.mkdir(getDirName(path), { recursive: true }, (err) => {
    if (err) console.log(err);

    fs.writeFile(path, content, err => {
      if (err) console.log(err);

    })
  });
}

/**
 * 
 * @param {function} func - function to wrapp in try/catch
 */
function errorHandler(func) {
  try{
    func();
  } catch(err) {
    console.log(err);
  }
}

function camelize(str) {
  const strArray = Array.from(str);
  let camelized = '';

  strArray[0] = str[0].toUpperCase();
  camelized = strArray.join('');
  return camelized;
}

function createClassNameString(className) {
  const [value] = className.split('.');
  return camelize(value);
}

module.exports = {
  createFileRecursively,
  errorHandler,
  camelize,
  createClassNameString
}