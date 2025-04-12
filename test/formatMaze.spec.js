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
        format = new FormatMaze();
    });

    describe('constructor', function () {

        it('should set a property called this.maze and set it to the argument that was passed in.', function () {
            expect(format.maze).to.be.a(String);
        });

        it('should set a property called this.matrix to be an empty array', function () {
            expect(format.matrix).a.instanceOf(Array);
            expect(format.matrix).to.equal(0);
        });


    });

    describe('formatMatrix', function () {

        it('should accept a single argument that is a string type', function () {
            let formatMatrixSpy = chai.spy.on(format, 'formatMatrix');

            format.formatMatrix(data);

            expect(formatMatrixSpy).to.have.been.called.with(data);
            chai.restore(format, 'formatMatrix');
        });

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

            let actual = format.formatMatrix(data);

            expect(actual.length === expected.length).to.be.true;
            expect(actual[0].length === expected[0].length).to.be.true;
            expect(actual[1].length === expected[1].length).to.be.true;
            expect(actual[2].length === expected[2].length).to.be.true;
            expect(actual[3].length === expected[3].length).to.be.true;
            expect(actual[4].length === expected[4].length).to.be.true;
            expect(actual[5].length === expected[5].length).to.be.true;
            expect(actual[6].length === expected[6].length).to.be.true;
            expect(actual[7].length === expected[7].length).to.be.true;

            for (let i = 0; i < expected.length; i++) {
                let actualNode = actual[i];
                let expectedNode = expected[i];

                expect(actualNode === expectedNode).to.be.true;
            }

        });

    });

});
