class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.next = null
    }

    append(data){
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }

        let temp = this.head

        while(temp.next){
            temp = temp.next
        }
        temp.next = node
    }

    reverse(){
        let curr = this.head
        let next = this.head
        let prev = this.head

        if (curr) {
            
        }
        
    }

    
}


const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)

console.log(list.head)