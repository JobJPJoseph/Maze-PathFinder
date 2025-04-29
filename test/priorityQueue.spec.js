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

})
