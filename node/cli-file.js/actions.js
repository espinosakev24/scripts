const { createFileRecursively } = require('./functions.js');
const ContentGenerator = require('./contentGenerator.js');

class Actions {
  createFile(args) {
    const [fileType, path] = args;

    if (!fileType) throw 'Error: Type of the file is missing ';
    if (!path) throw 'Error: Path of the file is missing ';

    const filename = path.replace(/^.*[\\\/]/, '');
    const contentGenerator = new ContentGenerator(fileType, filename);

    createFileRecursively(path, contentGenerator.getContent())
  }
}
module.exports = new Actions();