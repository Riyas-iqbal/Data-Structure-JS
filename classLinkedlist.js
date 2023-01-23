class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.addNode = function (data){
    let new_node = new Node(data)
    if (!this.head) {
        this.head = new_node
    } else {
        temp = this.head
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = new_node
    }
    return this.head
}

LinkedList.prototype.addNodeStart = function (data) {
    if (!this.head) return null
    let new_node = new Node(data)
    new_node.next = this.head
    this.head = new_node
}

LinkedList.prototype.printList = function () {
    temp = this.head
    if (!temp) return null
    while (temp !== null) {
        console.log(temp.data)
        temp=temp.next
    }
}

LinkedList.prototype.getLength = function () {
    if (!this.head) {
        return null
    }
    temp = this.head
    let length = 0
    while (temp !== null) {
        length++
        temp=temp.next
    }
    return length
}

LinkedList.prototype.deleteNode = function () {
    let temp = this.head
    let previous = this.head
    if (temp.next === null){
        this.head = null
        return 
    } 
    while (temp.next !== null) {
        previous = temp
        temp = temp.next
    }
    previous.next = null
}

LinkedList.prototype.deleteNodeAt = function (index){
    if (index === 1) {
        this.head = this.head.next
        return false
    }
    let temp = this.head
    let previous = temp
    let count = 0
    while(temp !== null){
        count++
        if (count === index) {
            previous.next = temp.next
        }else{
            previous = temp
            temp = temp.next
        }
    }
}

LinkedList.prototype.arrayToList = function (array){
    for (let i = 0; i < array.length; i++) {
        this.addNode(array[i])
    }
}

//     Methods -
//  1. addNode - add a node at the end of the list
//  2. addNodeStart - add a node at the beginning of the list
//  3. printList - print the list in the order it was added
//  4. deleteNode - delete a node from the end
//  5. deleteNodeAt - delete node at the index specified
//  6. arrayToList - accepts an array as arguments and convert it to a LinkedList  

let list = new LinkedList()     //create a linked list named 'list'