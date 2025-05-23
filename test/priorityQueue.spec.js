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
            mpQueue.heap.push({value: "A", priority: 20});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].value).to.equal("A"); // 20

            // mpQueue.enqueue("B", 19);
            mpQueue.heap.push({value: "B", priority: 19});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].value).to.equal("B"); // 19
            expect(mpQueue.heap[1].value).to.equal("A"); // 20

            // mpQueue.enqueue("C", 22);
            mpQueue.heap.push({value: "C", priority: 22});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].value).to.equal("B"); // 19
            expect(mpQueue.heap[1].value).to.equal("A"); // 20
            expect(mpQueue.heap[2].value).to.equal("C"); // 22

            // mpQueue.enqueue("D", 26);
            mpQueue.heap.push({value: "D", priority: 26});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].priority).to.equal(19); // B
            expect(mpQueue.heap[1].priority).to.equal(20); // A
            expect(mpQueue.heap[2].priority).to.equal(22); // C
            expect(mpQueue.heap[3].priority).to.equal(26); // D

            // mpQueue.enqueue("E", 15);
            mpQueue.heap.push({value: "E", priority: 15});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].priority).to.equal(15); // E
            expect(mpQueue.heap[1].priority).to.equal(19); // B
            expect(mpQueue.heap[2].priority).to.equal(22); // C
            expect(mpQueue.heap[3].priority).to.equal(26); // D
            expect(mpQueue.heap[4].priority).to.equal(20); // A


            // mpQueue.enqueue("F", 29);
            mpQueue.heap.push({value: "F", priority: 29});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].priority).to.equal(15); // E
            expect(mpQueue.heap[1].priority).to.equal(19); // B
            expect(mpQueue.heap[2].priority).to.equal(22); // C
            expect(mpQueue.heap[3].priority).to.equal(26); // D
            expect(mpQueue.heap[4].priority).to.equal(20); // A
            expect(mpQueue.heap[5].priority).to.equal(29); // F


            // mpQueue.enqueue("G", 21);
            mpQueue.heap.push({value: "G", priority: 21});
            mpQueue.length++;
            mpQueue.binarySortUp();
            expect(mpQueue.heap[0].priority).to.equal(15); // E
            expect(mpQueue.heap[1].priority).to.equal(19); // B
            expect(mpQueue.heap[2].priority).to.equal(21); // G
            expect(mpQueue.heap[3].priority).to.equal(26); // D
            expect(mpQueue.heap[4].priority).to.equal(20); // A
            expect(mpQueue.heap[5].priority).to.equal(29); // F
            expect(mpQueue.heap[6].priority).to.equal(22); // C

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

        it('should increment the length', function () {
            let val = "S";
            let distance = 25;
            mpQueue.enqueue(val, distance);

            expect(mpQueue.length).to.equal(1);
        });

    });

    describe('dequeue', function () {

        it('should call binarySortDown', function () {
            mpQueue.enqueue("A", 20);

            let spySortDown = chai.spy.on(mpQueue, 'binarySortDown');
            mpQueue.dequeue();
            expect(spySortDown).to.be.called;
            chai.spy.restore(mpQueue, 'binarySortDown');
        });

        it('should return the dequeued node', function () {
            mpQueue.enqueue("A", 20);
            mpQueue.enqueue("B", 19);
            mpQueue.enqueue("C", 22);
            mpQueue.enqueue("D", 26);
            mpQueue.enqueue("E", 15);
            mpQueue.enqueue("F", 29);
            mpQueue.enqueue("G", 21);

            let obj = mpQueue.dequeue();
            expect(obj.value).to.equal('E');
            expect(obj.priority).to.equal(15);
        });

        it('should decrement the this.length', function () {
            mpQueue.enqueue("A", 20);
            mpQueue.enqueue("B", 19);
            mpQueue.enqueue("C", 22);
            mpQueue.enqueue("D", 26);
            mpQueue.enqueue("E", 15);
            mpQueue.enqueue("F", 29);
            mpQueue.enqueue("G", 21);

            mpQueue.dequeue()

            expect(mpQueue.length).to.equal(6);
        });

    });

    describe('binarySortDown', function () {


        it('should re-sort after removing from the queue', function () {
            mpQueue.enqueue("A", 20);
            mpQueue.enqueue("B", 19);
            mpQueue.enqueue("C", 22);
            mpQueue.enqueue("D", 26);
            mpQueue.enqueue("E", 15);
            mpQueue.enqueue("F", 29);
            mpQueue.enqueue("G", 21);

            mpQueue.dequeue();
            // Before: [ebgdafc]
            // Before: [E:15, B:19, G:21, D:26, A:20, F:29, C:22];

            expect(mpQueue.heap[0].priority).to.equal(19);
            expect(mpQueue.heap[1].priority).to.equal(20);
            expect(mpQueue.heap[2].priority).to.equal(21);
            expect(mpQueue.heap[3].priority).to.equal(26);
            expect(mpQueue.heap[4].priority).to.equal(22);
            expect(mpQueue.heap[5].priority).to.equal(29);

            mpQueue.dequeue();

            expect(mpQueue.heap[0].priority).to.equal(20);
            expect(mpQueue.heap[1].priority).to.equal(22);
            expect(mpQueue.heap[2].priority).to.equal(21);
            expect(mpQueue.heap[3].priority).to.equal(26);
            expect(mpQueue.heap[4].priority).to.equal(29);

            mpQueue.dequeue();

            expect(mpQueue.heap[0].priority).to.equal(21);
            expect(mpQueue.heap[1].priority).to.equal(22);
            expect(mpQueue.heap[2].priority).to.equal(29);
            expect(mpQueue.heap[3].priority).to.equal(26);

            mpQueue.dequeue();

            expect(mpQueue.heap[0].priority).to.equal(22);
            expect(mpQueue.heap[1].priority).to.equal(26);
            expect(mpQueue.heap[2].priority).to.equal(29);

            mpQueue.dequeue();

            expect(mpQueue.heap[0].priority).to.equal(26);
            expect(mpQueue.heap[1].priority).to.equal(29);

            mpQueue.dequeue();

            expect(mpQueue.heap[0].priority).to.equal(29);

        });


    });

})
