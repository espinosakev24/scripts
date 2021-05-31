const { errorHandler } = require("./functions.js");
const actions = require('./actions.js');


class Executor {
  constructor() {
    this.command = process.argv.slice(2);
  }
  run() {
    errorHandler(() => {
      const [action] = this.command;
      const args = this.command.slice(1);

      if (!this.command.length) throw 'Error: command not specified'

      switch (action) {
        case "create":
          actions.createFile(args);
      }
    });
  }
}
const executor = new Executor();
executor.run();
