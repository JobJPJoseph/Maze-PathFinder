class MaxPriorityQueue {

    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return ((2 * i) - 1);
    }

    getRightChildIndex(i) {
        return ((2 * i) - 2);
    }
}

module.exports = {
    MaxPriorityQueue,
}
