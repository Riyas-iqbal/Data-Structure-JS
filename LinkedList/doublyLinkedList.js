class DoublyLinkedList {
    constructor(){
        this.head=null
        this.tail=null
    }

    append(data){
        let node = new Node(data)
        if (!this.head) {
            this.head = node
            return this.head
        }
        let temp = this.head
        while(temp.next !== null){
            temp=temp.next
        }
        temp.next = node
        node.prev = temp
        this.tail = node
    }

    // prepend(data)


}


class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}


const list = new DoublyLinkedList()

list.append(3)
list.append(4)
list.append(5)


console.log(list.tail.prev.prev);


