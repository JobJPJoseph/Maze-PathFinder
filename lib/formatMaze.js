class FormatMaze {
    constructor(maze) {
        this.maze = maze;
        this.matrix = [];
    }

    formatMatrix() {
        let sub = [];

        this.maze += '\n';

        for (let i = 0; i < this.maze.length; i++) {
            let elem = this.maze[i];

            if (elem !== "\n") {
                sub.push(elem);
            } else {
                this.matrix.push(sub);
                sub = [];
            }

        }

    }

    printMatrix() {

        console.log(this.matrix.map((row) => {
            console.log(row.join(" "));
        }).join(" "));

    }

}

module.exports = {
    FormatMaze,
}
