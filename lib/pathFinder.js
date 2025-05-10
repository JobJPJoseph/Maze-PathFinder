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

    while (minQueue.length) {
        let obj = minQueue.dequeue();
        let path = obj.value;
        let current = path[path.length - 1];

        if (!visited.has(String(current))) {
            visited.add(String(current));

            // console.log(path, current, obj);
            if (String(current) === String(end)) return path;

            let neighbors = getNeighbors(current[0], current[1], grid);

            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                // There should be a test here

                // current known distance + edge weight vs neighbor's stored distance
                    // current known distance: would be the last node in the path. Distance from it to the end point
                        // So it reaaly keeping track of the overall distance of the path to the end point.
                    // edge weight: the distance from the current spot to the neighbor
                    // neighbor's stored distance: is the distance form neighbor to the end point

                // There is an issue with the equation
                    // The distance from neighbor to end is always getting smaller so the edge case
                    // will always be false

                // The total cost of a path is what will keep us from going right instead of up
                    // Every time we take a step, we add to the total cost.
                        // Each step is a cost of 1
                    // Why would we go right instead of up at the start
                        // because of the distance being smaller
                    // We will prioritize the path with the minimum cost
                        // What will the cost be based on? The total step took.

                // Now that I think about it, I don't think we need to record the distance from here to the end node
                // All we have to do is priortize the minimum cost using breadth first.


                // let overallDistance = obj.priority + findC(current, neighbor);
                // console.log(`Current to end: ${findC(current, end)}, ":", Current to neighbor: ${findC(current, neighbor)}, ":", Neighbor to end: ${findC(neighbor, end)}`);
                // console.log(`Current: [${current}], Neighbor: [${neighbor}], End: [${end}]`);

                // let test = findC(start, current) - findC(current, neighbor);
                // let test1 = findC(current, end) - findC(current, neighbor);
                // console.log(test, ":", test1);

                // if (overallDistance <= findC(neighbor, end)) {
                //     minQueue.enqueue([...path, neighbor], findC(neighbor, end));
                // }


                minQueue.enqueue([...path, neighbor], obj.priority + 1); // priority === steps taken
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
