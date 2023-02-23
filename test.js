class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            return this.root = node
        }

        this.insertNode(this.root, node)
    }

    insertNode(root, node) {
        if (root.data > node.data) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    isPresent(data, root = this.root) {
        if (this.isEmpty()) {
            return false
        }

        if (root.data == data) {
            return true
        } else if (root.data > data && root.left) {
            this.isPresent(data, root.left)
        } else if (root.data < data && root.right) {
            this.isPresent(data, root.right)
        } 
        return -1
    }

}

const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(10)
bst.insert(7)
bst.insert(4)
console.log(bst.root)
console.log(bst.isPresent(6))