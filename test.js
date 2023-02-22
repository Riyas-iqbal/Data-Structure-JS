class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    
}


const bst = new BinarySearchTree()

console.log(bst.isEmpty())