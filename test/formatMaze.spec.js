const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');

chai.use(spies);

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, "../lib/maze.txt");
let data = fs.readFileSync(file, "utf-8").trim();

const { FormatMaze } = require('../lib/formatMaze');

describe('Format Maze', function () {

    it('should create a class called FormatMaze', function () {
        expect(FormatMaze).to.exist;
    });

    let format;

    beforeEach(function () {
        format = new FormatMaze(data);
    });

    describe('constructor', function () {

        it('should set a property called this.maze and set it to the argument that was passed in.', function () {
            expect(format.maze).to.be.a('string');
        });

        it('should set a property called this.matrix to be an empty array', function () {
            expect(format.matrix).to.be.a.instanceOf(Array);
            expect(format.matrix.length).to.equal(0);
        });


    });

    describe('formatMatrix', function () {

        it('should return a matrix', function () {

            // 8x16
            let expected = [
                ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', 'E', '*'],
                ['*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', '*', '*'],
                ['*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
                ['*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
                ['*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
                ['*', 'S', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
                ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']
            ];

            format.formatMatrix();

            expect(format.matrix.length === expected.length).to.be.true;
            expect(format.matrix[0].length === expected[0].length).to.be.true;
            expect(format.matrix[1].length === expected[1].length).to.be.true;
            expect(format.matrix[2].length === expected[2].length).to.be.true;
            expect(format.matrix[3].length === expected[3].length).to.be.true;
            expect(format.matrix[4].length === expected[4].length).to.be.true;
            expect(format.matrix[5].length === expected[5].length).to.be.true;
            expect(format.matrix[6].length === expected[6].length).to.be.true;
            expect(format.matrix[7].length === expected[7].length).to.be.true;

            for (let i = 0; i < expected.length; i++) {
                let actualNode = format.matrix[i];
                let expectedNode = expected[i];

                expect(String(actualNode) === String(expectedNode)).to.be.true;
            }

        });

    });

    describe('printMatrix', function () {

        it('should print out the grid', function () {
            format.formatMatrix();
            format.printMatrix();
        });

    });

});
