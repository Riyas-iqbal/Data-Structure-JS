class BinarySearchTree {
    constructor() {
        this.root = null
    }

    TreeNode = class TreeNode {
        constructor(data) {
            this.data = data
            this.left = null
            this.right = null
        }
    }

    isEmpty() {
        return this.root === null
    }

    insert(data) {
        const node = new this.TreeNode(data)
        if (this.isEmpty()) {
            return this.root = node
        }
        this.#insertNode(node)
    }

    #insertNode(node, root=this.root) {
        if (node.data < root.data) {
            if (!root.left) {
                return root.left = node
            } else {
                return this.#insertNode(node, root.left)
            }
        } else {
            if (!root.right) {
                return root.right = node
            } else {
                return this.#insertNode(node, root.right)
            }
        }
    }

    

}


const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(4)
bst.insert(1)
bst.insert(6)
bst.insert(10)
bst.insert(16)

console.log(bst.root)