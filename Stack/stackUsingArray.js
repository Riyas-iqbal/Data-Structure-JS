class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items[this.items.length] = data
    }

    pop() {
        if (this.items.length !== 0) {
            this.items.length--
        } else {
            return null
        }
    }

    peek() {
        if (this.items.length !== 0) {
            return this.items[this.items.length-1]
        } else {
            return null
        }
    }

    isEmpty(){
        return this.items
    }

    length(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.length())