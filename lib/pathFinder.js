function getNeighbors(row, col, grid) {
    let neighbors = [];

    if (row - 1 >= 0 && grid[row - 1][col] !== "*") neighbors.push([row - 1, col]);
    if (row + 1 < grid.length && grid[row + 1][col] !== "*") neighbors.push([row + 1, col]);
    if (col - 1 >= 0 && grid[row][col - 1] !== "*") neighbors.push([row, col - 1]);
    if (col + 1 < grid[row].length && grid[row][col + 1] !== "*") neighbors.push([row, col + 1]);

    return neighbors;
}

module.exports = {
    getNeighbors,
}
