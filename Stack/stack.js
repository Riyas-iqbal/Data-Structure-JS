class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null
    }

    printStack(){
        if (!this.top) {
            return null
        } 
        let temp = this.top
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }

    push(data){
        const stack = new Node(data)
        if (!this.top) {
            this.top=stack
            return this.top
        }
        stack.next=this.top
        this.top = stack
    }

    pop(){
        this.top = this.top?.next || null
    }
}

const stack = new Stack()

stack.pop()

stack.printStack()
