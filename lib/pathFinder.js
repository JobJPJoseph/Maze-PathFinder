const { MinPriorityQueue } = require('./priority-queue');

function getNeighbors(row, col, grid) {
    let neighbors = [];

    // up
    if (row - 1 >= 0 && grid[row - 1][col] !== "*" && grid[row - 1][col] !== "X" && grid[row - 1][col] !== "S") neighbors.push([row - 1, col]);
    // down
    if (row + 1 < grid.length && grid[row + 1][col] !== "*" && grid[row + 1][col] !== "X" && grid[row + 1][col] !== "S") neighbors.push([row + 1, col]);
    // left
    if (col - 1 >= 0 && grid[row][col - 1] !== "*" && grid[row][col - 1] !== "X" && grid[row][col - 1] !== "S") neighbors.push([row, col - 1]);
    // right
    if (col + 1 < grid[row].length && grid[row][col + 1] !== "*" && grid[row][col + 1] !== "X" && grid[row][col + 1] !== "S") neighbors.push([row, col + 1]);

    return neighbors;
}

function getPath(start, end, grid) {
    let visited = new Set();
    let minQueue = new MinPriorityQueue();

    let cCoordinate = findC(start, end);

    minQueue.enqueue([start], cCoordinate);
    console.log(minQueue);

    while (minQueue.length) {
        let obj = minQueue.dequeue();
        let path = obj.value;
        let current = path[path.length - 1];

        console.log(obj, path, current)

        if (!visited.has(String(current))) {
            visited.add(String(current));

            if (String(current) === String(end)) return path;

            let neighbors = getNeighbors(current[0], current[1], grid);
            console.log(neighbors)
            console.log(visited);
            console.log(obj, path, current);

            return;


            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                // There should be a test here
                    //
                minQueue.enqueue([...path], neighbor);

            }

        }

    }

    return -1;
}

function findC(neighbor, end) {
   // a represents the distance from neighbor's x value to the end's x
    let a = Math.abs(neighbor[0] - end[0]);
    a = a * a;
    let b = Math.abs(neighbor[1] - end[1]);
    b = b * b;

    return Math.sqrt(a + b);
}



module.exports = {
    getNeighbors,
    getPath,
    findC,
}
