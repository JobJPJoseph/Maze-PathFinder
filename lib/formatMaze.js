const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, "../lib/maze.txt");
// console.log(file);
let data = fs.readFileSync(file, "utf-8").trim();
// console.log(data);

class Tree {
    constructor() {
        this.root = null;
    }

    insertBT(val, branch=this.root) {
        // We will use Breadth-first insertion bc it the only way
        // to confirm that anything is there
        if (this.root === null) {
            this.root = new TreeNode(val);
            return;
        }

        let nodes = [branch];

        while (nodes.length > 0) {
            let arr = [];

            while (nodes.length > 0) {
                let node = nodes.shift(); // From left => right

                if (node.left === null) {
                    node.left = new TreeNode(val);
                    return;
                }

                if (node.right === null) {
                    node.right = new TreeNode(val);
                    return;
                }

                arr.push(node.left);
                arr.push(node.right);
            }

            nodes = arr;
        }

    }

}

class TreeNode {
    constructor(val) {
        this.value = val || undefined;
        this.left = null;
        this.right = null;
    }
}

let tree = new Tree();
tree.insertBT("S");
let treeArr = [];
let arr = [];
let j = 0;

for (let i = 0; i < data.length; i++) {
    let row = data[i];

    if (j < 16) {

        if (row === "") {
            arr.push(" ");
        } else {
            if (row !== "\n") arr.push(row);
        }

        j++;
    } else {
        treeArr.push(arr);
        arr = [];

        if (row === "") {
            arr.push(" ");
        } else {
            if (row !== "\n") arr.push(row);
        }

        j = 0;
    }

}

treeArr.push(treeArr[0]);

for (let i = 0; i < treeArr.length; i++) {
    let row = treeArr[i];

    console.log(row.join(""));
}
