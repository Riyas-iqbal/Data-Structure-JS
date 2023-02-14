class Node {
    constructor(data) {
        this.value = data
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)

        if (this.isEmpty()) {
            this.root = node
            return this.root
        }
        //private method call
        this.#insertNode(this.root,node)
    }

    //private methods introduced in ECMAscript 10 (2019)
    #insertNode(root,node){
        if (root.value > node.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.#insertNode(root.left,node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.#insertNode(root.right,node)
            }
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(5)
console.log(bst.root)