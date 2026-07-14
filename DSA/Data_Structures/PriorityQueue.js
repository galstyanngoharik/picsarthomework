class PriorityQueue {
    #heap;
    
    constructor() {
        this.#heap = [];
    }


    #parent(index) {
        return Math.floor(index-1) / 2;
    }

    #left(index) {
        return index * 2 + 1;

    }

    #right(index) {
        return index * 2 + 2;
    }

    #shiftUp(index) {
        while(index) {
            const parentidx = this.#parent(index);
            if(this.#heap[parentidx] > this.#heap[index]) {
                [this.#heap[parentidx], this.#heap[index]] = [this.#heap[index], this.#heap[parentidx]];
                index = parentidx;
            } else { break; }
        }
    }

    #shiftDown(index) {
        while(true) {
            let left = this.#left(index);
            let right = this.#right(index);
            if(!this.#heap[left]) { return; }
            if(!this.#heap[right] || this.#heap[left] < this.#heap[right]) { 
                if(this.#heap[left] < this.#heap[index]) {
                    [this.#heap[left], this.#heap[index]] = [this.#heap[index], this.#heap[left]];
                    index = left;
                } else { break; }
            } else {
                if(this.#heap[right] < this.#heap[index]) {
                    [this.#heap[right], this.#heap[index]] = [this.#heap[index], this.#heap[right]];
                    index = right;
                } else { break; }
            }
        }
    }

    size() { return this.#heap.length; }

    isEmpty() { return this.#heap.length === 0; }

    clear() { this.#heap = []; }

    peek() { return this.#heap[0]; }

    dequeue() { 
        const el = this.peek();
        this.#heap[0] = this.#heap.pop();
        this.#shiftDown(0);
        return el;
    }

    enqueue(value) {
        this.#heap[this.size()] = value;
        this.#shiftUp(this.size()-1);
    }
}

let heap = new PriorityQueue();
heap.enqueue(13);
heap.enqueue(2);
heap.enqueue(40);
heap.enqueue(20)

console.log(heap.size());

