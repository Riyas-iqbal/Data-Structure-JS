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

    search(value,root=this.root){
        if (!root) {
            return false
        }

        if (root.value === value) {
            return true
        } else if (root.value > value) {
            return this.search(value,root.left)
        } else {
            return this.search(value,root.right)
        }
    }

    preOrder(root=this.root){
        if (root) {
            console.log(root.value)
            if(root.left) this.preOrder(root.left)
            if(root.right) this.preOrder(root.right)
        }
    }

    inOrder(root=this.root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root=this.root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

}

const bst = new BinarySearchTree()

bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(40)
bst.insert(7)
bst.insert(2)
bst.insert(5)
bst.postOrder()

console.log(bst.root)