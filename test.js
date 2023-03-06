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
        return this.top
    }
    
}


const stack = new Stack()


function matchBracket(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '(' || ')') {
            if (stack.peek() == '(' && array[i] == ')' ) {
                stack.pop()
            } else {
                stack.push(array[i])
            }
        }
    }
    return this.size
}


console.log(matchBracket([1,2,3,4,5,6]))