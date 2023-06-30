class Node {
    constructor(data) {
        this.value = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.head = null
    }

    isEmpty() {
        return this.head === null
    }

    insertNode(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            return
        }

        this.#insertNode(node, this.head)
    }

    #insertNode(nodeToInsert, currentNode) {
        if (currentNode.value > nodeToInsert.value) {
            if (!currentNode.left) {
                currentNode.left = nodeToInsert
                return
            }
            this.#insertNode(nodeToInsert, currentNode.left)
        } else {
            if (!currentNode.right) {
                currentNode.right = nodeToInsert
                return
            }
            this.#insertNode(nodeToInsert, currentNode.right)
        }
    }

    contains(data, root = this.head) {
        
        if (this.isEmpty()) return 'bst empty'
        if (root.value === data) return root

        if (root.value > data && root.left) {
            return this.contains(data,root.left)
             
        } 

        if (root.value < data && root.right) {
            return this.contains(data, root.right)
        }

        return -1
    }

    
}

const bst = new BST()

bst.insertNode(5)
bst.insertNode(2)
bst.insertNode(1)
bst.insertNode(3)
bst.insertNode(7)
console.log(bst.head)
