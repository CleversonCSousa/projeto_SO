const child_process = require("child_process");

function getTimeData(path) {
  return new Promise((resolve, reject) => {
    child_process.exec(
      `cd ./SO/${path} && /usr/bin/time -v ./index`,
      {
        maxBuffer: 1024 * 1024 * 10,
      },
      (err, stdout, stderr) => {
        if (err) {
          console.log(err);
          reject(new Error("Invalid command"));
        } else {
          resolve(stderr);
        }
      }
    );
  });
}

module.exports = getTimeData;
