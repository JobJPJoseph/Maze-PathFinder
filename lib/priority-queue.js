class MinPriorityQueue {

    constructor() {
        this.heap = [];
        this.length = 0;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return ((2 * i) + 1);
    }

    getRightChildIndex(i) {
        return ((2 * i) + 2);
    }

    bubbleSort(i, reference) {
        [this.heap[i], this.heap[reference]] = [this.heap[reference], this.heap[i]];
    }

    binarySortUp() {
        let index = 0;

        // The loop has to based on the index of the left child
        while (this.getLeftChildIndex(index) < this.length) {
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);

            if (right < this.length && this.heap[left].priority > this.heap[right].priority) {
                left = right;
            }

            if (this.heap[left].priority >= this.heap[index].priority) return;

            this.bubbleSort(index, left);
            index = left;
        }

    }

    enqueue(val, distance) {
        let node = { value: val, priority: distance };
        this.heap.push(node);
        this.length++;
        this.binarySortUp();
    }

}

module.exports = {
    MinPriorityQueue,
}
