class MaxBinaryHeap{
    constructor(){
        this.heap = []
    }

    insert(data){
        this.heap.push(data)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.heap.length-1
        let element = this.heap[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.heap[parentIdx]
            if (parent >= element) break;
            this.heap[parentIdx] = element
            this.heap[idx] = parent
        }
    }
}


const heap = new MaxBinaryHeap()

heap.insert(10)
heap.insert(3)
heap.insert(50)
heap.insert(35)
heap.insert(20)
heap.insert(9)
heap.insert(21)

console.log(heap.heap)