const fs = require('fs');
const path = require('path');

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

// }

// class LinkedListNode {
//     constructor(val) {
//         this.value = val || undefined;
//         this.next = null;
//         this.previous = null;
//     }
// }

// let tree = new LinkedList();
// let treeArr = [];
// let arr = [];
// let j = 0;

// for (let i = 0; i < data.length; i++) {
//     let row = data[i];

//     if (j < 16) {

//         if (row === "") {
//             arr.push(" ");
//         } else {
//             if (row !== "\n") arr.push(row);
//         }

//         j++;
//     } else {
//         treeArr.push(arr);
//         arr = [];

//         if (row === "") {
//             arr.push(" ");
//         } else {
//             if (row !== "\n") arr.push(row);
//         }

//         j = 0;
//     }

// }

// treeArr.push(treeArr[0]);

// for (let i = 0; i < treeArr.length; i++) {
//     let row = treeArr[i];

//     console.log(row.join(""));
// }

class FormatMaze {
    constructor(maze) {
        this.maze = maze;
        this.matrix = [];
        // formatMatrix();
    }

    formatMatrix() {

    }

    printMatrix() {

    }

}

// const file = path.join(__dirname, "../lib/maze.txt");
// let data = fs.readFileSync(file, "utf-8").trim();

// console.log(data.includes('\n'));

// const maze = new FormatMaze(data);

module.exports = {
    FormatMaze,
}
