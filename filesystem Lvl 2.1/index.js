
// Möglichkeit 1
/* const fs = require("fs");

let rawData = fs.readFileSync("data.json");
let data = JSON.parse(rawData);
console.log(data) */


// Möglichkeit 2
const fs = require("fs");
const jsonPath = "data.json";
const jsonData = fs.readFileSync(jsonPath, "utf-8");
const txtPath = "data.txt";
fs.writeFileSync(txtPath, jsonData, "utf-8");
console.log("Die Json-Datei wurde in data.txt exportiert")
