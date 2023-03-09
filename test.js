class Node{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}


class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        const node = new Node(data)

        if (this.root === null) {
            return null
        }

        this.insertNode(node,root)
    }

    insertNode(node,root){
        if (node.data < root.value) {
            if (root.left) {
                this.insertNode(node)
            }
        }
    }



}