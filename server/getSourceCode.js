const fs = require("fs");

function getSourceCode(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `./SO/${path}`,
      {
        encoding: "utf8",
      },
      (err, data) => {
        if (err) {
          reject(new Error("Could not open the file"));
        } else {
          resolve(data);
        }
      }
    );
  });
}

module.exports = getSourceCode;
