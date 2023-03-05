class Node {
    constructor(data) {
        this.value = data
        this.right = null
        this.left = null
    }
}

class QueueNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.rear = null
        this.front = null
        this.size = 0
    }

    enQueue(data) {
        const node = new QueueNode(data)
        this.size++
        if (!this.front) {
            this.rear = node
            this.front = node
            return this.rear
        }
        this.rear.next = node
        this.rear = node
        return this.rear
    }

    deQueue() {
        if (!this.front) {
            return null
        }
        this.size--
        let temp = this.front
        this.front = this.front.next
        return temp
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
            this.root = node
            return this.root
        }
        //private method call
        this.#insertNode(this.root, node)
    }

    //private methods introduced in ECMAscript 10 (2019)
    #insertNode(root, node) {
        if (root.value > node.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.#insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.#insertNode(root.right, node)
            }
        }
    }

    search(value, root = this.root) {
        if (!root) {
            return false
        }

        if (root.value === value) {
            return root
        } else if (root.value > value) {
            return this.search(value, root.left)
        } else {
            return this.search(value, root.right)
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    min(root = this.root) {
        if (root.left) {
            return this.min(root.left)
        }
        return root.value
    }

    max(root = this.root) {
        if (root.right) {
            return this.max(root.right)
        }
        return root.value
    }

    delete(value) {
        if (this.isEmpty()) {
            return null
        }
        this.root = this.deleteNode(value)
        // console.log(this.root)
    }

    deleteNode(value, root = this.root) {
        if (root.value > value) {
            root.left = this.deleteNode(value, root.left)
        } else if (root.value < value) {
            root.right = this.deleteNode(value, root.right)
        } else {
            if (!root.right && !root.left) {
                return null
            } else if (!root.right) {
                return root.left
            } else if (!root.left) {
                return root.right
            } else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.value, root.right)
            }
        }
        return root
    }

    isValidBST(root = this.root) {

        function isValidNode(node) {
            if (!node) {
                return true
            }

            if (node.right && node.right.value <= node.value) {
                return false
            }

            if (node.left && node.left.value >= node.value) {
                return false
            }

            return(isValidNode(node.left) && isValidNode(node.right))
        }

        return isValidNode(root)

    }

}


const bst = new BinarySearchTree()

bst.insert(5)
// bst.insert(4)
// bst.insert(8)
bst.insert(9)
bst.insert(1)
bst.insert(3)

bst.delete(3)

console.log(bst)


console.log(bst.isValidBST())
