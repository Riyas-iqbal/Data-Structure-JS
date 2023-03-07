//   (() --->  1
//   (()) --->  0
//   ())( --->  0


class StackNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }


    push(data){
        this.size++
        const node = new StackNode(data)
        if (!this.top) return this.top = node
        node.next = this.top
        this.top = node
    }

    pop(){
        this.size--
        let lastElem =  this.top.data
        this.top = this.top.next
        return lastElem
    }

    peek(){
        return this.top?.data
    }

    matchBracket(array){
        for (let i = 0; i < array.length; i++) {
            if (array[i] == '(' || array[i] == ')') {
                if (this.peek() == '(' && array[i] == ')' ) {
                    this.pop()
                } else {
                    this.push(array[i])
                }
            }
        }
        return this.size
    }
    
    
}

const stack = new Stack()

console.log(stack.matchBracket([1,2,3,4,5,6,'(',')']))