class Node {
    constructor(data) {
        this.value = data
        this.right = null
        this.left = null
    }
}

class QueueNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Queue{
    constructor(){
        this.rear = null
        this.front = null
        this.size = 0
    }

    enQueue(data){
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

    deQueue(){
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
            return root
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

    BreadthFirstSearch(){
        const queue = new Queue()
        if (!this.root) {
            return null   
        }
        queue.enQueue(this.root)
        while(queue.size != 0){
            const current = queue.deQueue()
            console.log(current.data.value)
            if (current.data.left) {
                queue.enQueue(current.data.left)
            }

            if (current.data.right) {
                queue.enQueue(current.data.right)
            }
        }
    }

    levelOrder = this.BreadthFirstSearch

    min(root=this.root){
        if(this.isEmpty()){
            return null
        }

        if (root.left) {
            return this.min(root.left)
        } 

        return root.value
    }

    max(root=this.root){
        if (this.isEmpty()) {
            return null
        }

        if(root.right){
            return this.max(root.right)
        }

        return root.value
    }

    delete(value){
        if (this.isEmpty()) {
            console.log('Tree is empty')
            return null
        }

        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if (root === null) return root
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        } else if (value > root.value ){
            root.right = this.deleteNode(root.right,value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
                  if (!root.left) {
                      return root.right
                  } else if ( !root.right){
                      return root.left
                  } 
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,value)
        }
        return root
    }

    isValidBST(root=this.root) {
        (function isValidNode(node){
          if (!node) {
            return true;
          }
          if (node.left && node.left.val >= node.value) {
            return false;
          }
          if (node.right && node.right.val <= node.value) {
            return false;
          }
          return (
            isValidNode(node.left) &&
            isValidNode(node.right)
          );
        }(root))
      }

}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)

// bst.delete(3)
console.log(bst.isValidBST())
console.log(bst.root)

// bst.BreadthFirstSearch()
// bst.levelOrder()

// console.log(bst.max())

// console.log(bst.root)