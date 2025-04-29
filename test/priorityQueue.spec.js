const { MaxPriorityQueue } = require(`../lib/priority-queue`);

const chai = require('chai');
const expect = chai.expect;

describe('MaximumPriorityQueue', function () {

    it('should initialize a class called MaxPriorityQueue', function () {
        expect(MaxPriorityQueue).to.exist;
    });

    let mpQueue;

    beforeEach(function () {
        mpQueue = new MaxPriorityQueue();
    });

    describe('constructor', function () {

        it('should create a property called this.heap and set it an empty array', function () {
            expect(mpQueue.heap).to.exist;
            expect(mpQueue.heap).to.be.a('array');
            expect(mpQueue.heap.length).to.equal(0);
        });

    });

    describe('getLeftChildIndex', function () {

        it('should return the result of ((2 * i) - 1)', function () {
            expect(mpQueue.getLeftChildIndex(5)).to.equal(9);
            expect(mpQueue.getLeftChildIndex(2)).to.equal(3);
            expect(mpQueue.getLeftChildIndex(3)).to.equal(5);
        });

    });

    describe('getRightChildIndex', function () {

        it('should return the result of ((2 * i) - 2)', function () {
            expect(mpQueue.getRightChildIndex(1)).to.equal(0);
            expect(mpQueue.getRightChildIndex(2)).to.equal(2);
            expect(mpQueue.getRightChildIndex(4)).to.equal(6);
        });

    });

    describe('getParentIndex', function () {

        it('should return the result of Math.floor((i - 1) / 2)', function () {
            expect(mpQueue.getParentIndex(3)).to.equal(1);
            expect(mpQueue.getParentIndex(1)).to.equal(0);
            expect(mpQueue.getParentIndex(2)).to.equal(0);

        });

    });

})
