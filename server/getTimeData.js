const child_process = require("child_process");

function getTimeData(path) {
  return new Promise((resolve, reject) => {
    child_process.exec(
      `/usr/bin/time -v ../SO/${path}`,
      (err, stdout, stderr) => {
        if (err) {
          reject(new Error("Invalid command"));
        } else {
          resolve(stderr);
        }
      }
    );
  });
}

module.exports = getTimeData;
