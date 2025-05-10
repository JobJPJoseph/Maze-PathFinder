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
        let recentIndex = this.length - 1;

        while (recentIndex > 0 && this.heap[recentIndex].priority < this.heap[this.getParentIndex(recentIndex)].priority) {
            this.bubbleSort(recentIndex, this.getParentIndex(recentIndex));
            recentIndex = this.getParentIndex(recentIndex);
        }

    }

    enqueue(val, steps) {
        let node = { value: val, priority: steps };
        this.heap.push(node);
        this.length++;
        this.binarySortUp();
    }

    binarySortDown() {
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

    dequeue() {
        if (this.length === 0) return null;
        if (this.length === 1) {
            this.length--;
            return this.heap.pop();
        }

        let obj = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.length--;
        this.binarySortDown();
        return obj;
    }
}

module.exports = {
    MinPriorityQueue,
}
