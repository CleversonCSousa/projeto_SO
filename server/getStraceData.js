const { exec } = require("child_process");
const path = require("path");

function getStraceData(programPath) {
  return new Promise((resolve, reject) => {
    exec(
      `cd ./SO/${programPath} && strace ./index`,
      {
        maxBuffer: 1024 * 1024 * 100,
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`Exec Error: ${error.message}`));
          return;
        }

        if (stderr) {
          resolve(stderr);
        } else {
          reject(new Error("Não há output do strace"));
        }
      }
    );
  });
}

module.exports = getStraceData;
