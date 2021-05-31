const { camelize, createClassNameString } = require('./functions.js');

class ContentGenerator {
  constructor(contentType, fileName) {
    this.contentType = contentType;
    this.fileName = fileName;
  }
  getContent() {
    switch (this.contentType) {
      case 'controller':
        return this.controllerContent();
    }
  }
  controllerContent() {
    const className = createClassNameString(this.fileName);
    return `
      export default class ${className}Controller {
        constructor(){}
      }
    `
  }
}
module.exports = ContentGenerator;