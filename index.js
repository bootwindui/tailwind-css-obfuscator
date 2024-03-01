const fs = require("fs");

const path = require("path");
const dirPath = path.join(__dirname, "/src/");

const uniqChar = "0123456789abcdefghijklmnopqrstuvwxyz".split("");

let uniqClassName = []; // up to 10656
uniqChar.forEach((char) => {
  uniqClassName.push("_b-" + char);
  uniqClassName.push("_o-" + char);
  uniqClassName.push("_o-" + char);
  uniqClassName.push("_t-" + char);
  uniqClassName.push("_w-" + char);
  uniqClassName.push("_i-" + char);
  uniqClassName.push("_n-" + char);
  uniqClassName.push("_u-" + char);
  uniqClassName.push("_i-" + char);
  uniqChar.forEach((char2) => {
    uniqClassName.push("_b-" + char2);
    uniqClassName.push("_o-" + char2);
    uniqClassName.push("_o-" + char2);
    uniqClassName.push("_t-" + char2);
    uniqClassName.push("_w-" + char2);
    uniqClassName.push("_i-" + char2);
    uniqClassName.push("_n-" + char2);
    uniqClassName.push("_u-" + char2);
    uniqClassName.push("_i-" + char2);
  });
});

const htmlFile = fs.readFileSync(dirPath + "index.html").toString();
console.log(htmlFile);

const cssFile = fs
  .readFileSync(dirPath + "styles.css")
  .toString()
  .replaceAll("{", "dd5bc3d1-b4e1-41d2-a8e8-ad79c1eada87")
  .replaceAll("}", "96441437-a1a7-44ee-bb11-020ba10a9983")
  .split("96441437-a1a7-44ee-bb11-020ba10a9983");

let allClasses = [];

cssFile.forEach((file) => {
  const cssClassName = file.split("dd5bc3d1-b4e1-41d2-a8e8-ad79c1eada87")[0];
  if (
    !cssClassName.includes(["@"]) &&
    cssClassName.includes(["."]) &&
    !cssClassName.includes(["content"])
  ) {
    cssClassName.split(".").forEach((name) => {
      if (name) {
        allClasses.push(name.replaceAll("\\", "").replaceAll(" ", ""));
      }
    });
  }
});

const replaceClassNames = [];
const results = [];
allClasses.forEach((from, index) => {
  if (from.length > 4) {
    replaceClassNames.push([from, uniqClassName[index]]);
    results.push(uniqClassName[index]);
  } else {
    replaceClassNames.push([from, from]);
    results.push(from);
  }
});

console.log(allClasses.toString());
console.log(results.toString());
