const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, "../lib/maze.txt");
let data = fs.readFileSync(file, "utf-8").trim();

const { FormatMaze } = require('../lib/formatMaze');
const { getPath, getNeighbors } = require('../lib/pathFinder');

describe('PathFinder Project', function () {

    let format;
    let start;
    let end;

    beforeEach(function () {
        format = new FormatMaze(data);
        format.formatMatrix();

        for (let x = 0; x < format.matrix.length; x++) {

            for (let y = 0; y < format.matrix.length; y++) {

                if (format.matrix[x][y] === "S") start = [x, y];
                if (format.matrix[x][y] === "E") end = [x, y];

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

    // describe('getPath', function () {

    //     it('should declare the function', function () {

    //     });

    //     it('should return the optimal path from S to E', function () {

    //     });

    // });

});
