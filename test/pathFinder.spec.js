const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, "../lib/maze.txt");
let data = fs.readFileSync(file, "utf-8").trim();

const { FormatMaze } = require('../lib/formatMaze');
const { getPath, getNeighbors, findC } = require('../lib/pathFinder');

describe('PathFinder Project', function () {

    let format;
    let start;
    let end;

    beforeEach(function () {
        format = new FormatMaze(data);
        format.formatMatrix();

        for (let x = 0; x < format.matrix.length; x++) {

            for (let y = 0; y < format.matrix[x].length; y++) {

                if (format.matrix[x][y] === "S") {
                    // console.log([x, y]);
                    start = [x, y];
                }

                if (format.matrix[x][y] === "E") {
                    // console.log([x, y]);
                    end = [x, y];
                }

            }

        }

    });

    describe('getNeighbors', function () {

        it('should declare the function', function () {
            expect(getNeighbors).to.exist;
        });

        it('should return valid coordinate of the targets neighbors', function () {
            let neighbors = getNeighbors(6, 1, format.matrix);

            let expected = [[5, 1], [6, 2]];

            expect(neighbors.length === expected.length).to.be.true;

            for (let i = 0; i < expected.length; i++) {
                expect(String(neighbors[i]) === String(expected[i])).to.be.true;
            }

        });

    });

    describe('findC', function () {

        it('should return the result of a^2 + b^2 = c^2 and square it', function () {
            let leftOfStart = [6, 2]
            let expected = findC(leftOfStart, end);
            expect(expected).to.equal(13);

            let upFromStart = [5, 1];
            let expected1 = findC(upFromStart, end);
            expect(expected1).to.equal(Math.sqrt(185));
        });

    });

    describe('getPath', function () {

        it('should declare the function', function () {
            expect(getPath)
        });

        it('should return the optimal path from S to E', function () {
            // console.log(format.matrix)
            let expected = getPath(start, end, format.matrix);
            console.log(expected);

            for (let i = 0; i < expected.length; i++) {
                let [row, col] = expected[i];

                format.matrix[row][col] = "X";
            }

            console.log(format.printMatrix());

        });

    });

});
