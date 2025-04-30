const { MinPriorityQueue } = require(`../lib/priority-queue`);

const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;

chai.use(spies);

describe('MinimumPriorityQueue', function () {

    it('should initialize a class called MinPriorityQueue', function () {
        expect(MinPriorityQueue).to.exist;
    });

    let mpQueue;

    beforeEach(function () {
        mpQueue = new MinPriorityQueue();
    });

    describe('constructor', function () {

        it('should create a property called this.heap and set it an empty array', function () {
            expect(mpQueue.heap).to.exist;
            expect(mpQueue.heap).to.be.a('array');
            expect(mpQueue.heap.length).to.equal(0);
        });

        it('should create a property called this.length that represent the length of this.heap', function () {
            expect(mpQueue.length).to.exist;
            expect(mpQueue.length).to.be.a('number');
            expect(mpQueue.length).to.equal(0);
        });

    });

    describe('getLeftChildIndex', function () {

        it('should return the result of ((2 * i) + 1)', function () {
            expect(mpQueue.getLeftChildIndex(5)).to.equal(11);
            expect(mpQueue.getLeftChildIndex(2)).to.equal(5);
            expect(mpQueue.getLeftChildIndex(3)).to.equal(7);
        });

    });

    describe('getRightChildIndex', function () {

        it('should return the result of ((2 * i) + 2)', function () {
            expect(mpQueue.getRightChildIndex(1)).to.equal(4);
            expect(mpQueue.getRightChildIndex(2)).to.equal(6);
            expect(mpQueue.getRightChildIndex(4)).to.equal(10);
        });

    });

    describe('getParentIndex', function () {

        it('should return the result of Math.floor((i - 1) / 2)', function () {
            expect(mpQueue.getParentIndex(3)).to.equal(1);
            expect(mpQueue.getParentIndex(1)).to.equal(0);
            expect(mpQueue.getParentIndex(2)).to.equal(0);

        });

    });

    describe('bubbleSort', function () {

        it('should switch the values that are referenced', function () {
            let obj = { value: "S", priority: 25};
            let obj1 = { value: "E", priority: 23 };

            mpQueue.heap.push(obj, obj1);

            expect(mpQueue.heap[0].value).to.equal("S");
            expect(mpQueue.heap[1].value).to.equal('E');

            mpQueue.bubbleSort(0, 1);

            expect(mpQueue.heap[0].value).to.equal("E");
            expect(mpQueue.heap[1].value).to.equal('S');
        });

    });

    // Priority represents the distance from the node to the exit
    describe('binarySortUp', function () {

        // Does not need to accept an object. Assume last index
        it('it should sort the object based on its priority', function () {
            let obj = { value: "S", priority: 25};
            mpQueue.heap.push(obj);
            mpQueue.length++;

            // check properties
            expect(mpQueue.heap[0]).to.be.a('object');
            expect(mpQueue.heap[0].value).to.exist.and.to.equal("S");
            expect(mpQueue.heap[0].priority).to.exist.and.to.equal(25);

            // check its position
            let obj1 = { value: "E", priority: 23 };
            mpQueue.heap.push(obj1);
            mpQueue.length++;

            mpQueue.binarySortUp();

            expect(mpQueue.heap[0].value).to.equal("E");
            expect(mpQueue.heap[1].value).to.equal("S");
        });

    });

    describe('enqueue', function () {

        it('should accept two arguments', function () {
            let spyEnqueue = chai.spy.on(mpQueue, 'enqueue');
            mpQueue.enqueue("test", 24);
            expect(spyEnqueue).to.be.called.with('test', 24);
            chai.spy.restore(mpQueue, 'enqueue');
        });

        it('should call binarySortUp', function () {
            let spySortUp = chai.spy.on(mpQueue, 'binarySortUp');
            mpQueue.enqueue("test", 24);
            expect(spySortUp).to.be.called.once;
            chai.spy.restore(mpQueue, 'binarySortUp');
        });


        it('should add the value into the queue', function () {
            // let obj = { value: "S", priority: 25};
            let val = "S";
            let distance = 25;
            mpQueue.enqueue(val, distance);

            expect(mpQueue.heap[0]).to.be.a('object');
            expect(mpQueue.heap[0].value).to.exist.and.to.equal("S");
            expect(mpQueue.heap[0].priority).to.exist.and.to.equal(25);
        });

        it('should increment the length', function () {
            let val = "S";
            let distance = 25;
            mpQueue.enqueue(val, distance);

            expect(mpQueue.length).to.equal(1);
        });

        it('should the sort the heap', function () {
            let val = "S";
            let distance = 25;
            mpQueue.enqueue(val, distance);

            let val2 = "E";
            let distance2 = 24;
            mpQueue.enqueue(val2, distance2);

            expect(mpQueue.heap[0].value).to.equal('E');
            expect(mpQueue.heap[1].value).to.equal('S');
        });

    });

    describe('binarySortDown', function () {

    });

    describe('dequeue', function () {

    });

})
