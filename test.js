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

    #insertNode(node, root = this.root) {
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

    search(data, root = this.root) {
        if (this.isEmpty()) {
            return 'Tree is empty'
        }
        if (root.data === data) {
            return root
        } else if (root.data > data && root.left) {
            return this.search(data, root.left)
        } else if (root.data < data && root.right) {
            return this.search(data, root.right)
        }
        return -1
    }

    exist(data, root = this.root) {
        if (this.isEmpty()) {
            return 'Tree is empty'
        }

        if (root.data === data) {
            return true
        } else if (root.data > data && root.left) {
            return this.exist(data, root.left)
        } else if (root.data < data && root.right) {
            return this.exist(data, root.right)
        }
        return false
    }

    preOrder(root=this.root){
        if (this.isEmpty()) {
            return 'Tree is empty'
        }
        if (root) {
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root=this.root){
        if (this.isEmpty()) {
            return 'Tree is empty'
        }

        if (root) {
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    postOrder(root=this.root){
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
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

bst.postOrder()