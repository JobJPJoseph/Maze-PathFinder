const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, "../lib/maze.txt");
console.log(file);
const data = fs.readFileSync(file, "utf-8");
console.log(data);
