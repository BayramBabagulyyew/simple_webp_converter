const webp = require("webp-converter");

webp.grant_permission();

const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "input");


fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  //listing all files using forEach
  files.forEach(function (file) {
    // console.log(file.split(".")[0]);

    const result = webp.cwebp(
      `input/${file}`,
      `output/${file.split('.')[0]}.webp`,
      "-q 75",
      (logging = "-v")
    );
  });
});

console.log("Success");
