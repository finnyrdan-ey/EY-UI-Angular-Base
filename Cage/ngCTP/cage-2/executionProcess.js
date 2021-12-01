const exec = require('child_process').exec;

function executeCommand(cmd, callback) {
  console.log("Executing : " + cmd);
  setTimeout(function () {
    exec(cmd, function (err, stdout) {
      if (err) {
        throw err;
      }
      console.log(stdout);
      if (callback) {
        callback();
      }
    });
  }, 1);
}

function processCommandExecution(cmds, callback) {
  var execNext = function () {
    console.log('cmd', cmds);
    executeCommand(cmds.shift(), function (err) {
      if (err) {
        callback(err);
      } else {
        if (cmds.length) execNext();
        else callback(null);
      }
    });
  }
  execNext();
}

module.exports = { processCommandExecution }