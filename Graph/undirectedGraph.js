class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return this.adjacencyList[vertex] = new Set() 
        }
        return 'vertex alreay exist'
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2)

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeVertex(vertex){
        if (this.adjacencyList[vertex]) {
            [...this.adjacencyList[vertex]].forEach((edgeVertex)=>{
                this.removeEdge(vertex,edgeVertex)
            })
            return delete this.adjacencyList[vertex]
        }
        return 'Vertex Doesnt Exist'
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log( vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }

    depthFirstSearchRecursive(start){
        let result = []
        let visited = {};
        let list = this.adjacencyList;

        (function checkVertex(vertex) {
            if (!list[vertex]) return null;
            visited[vertex] = true
            result.push(vertex);
            [...list[vertex]].forEach(Element => {
                if (!visited[Element]) {
                    return checkVertex(Element)
                }
            });
        })(start)

        return result
    }


    depthFirstSearchIterative(start){
        const stack = []
        const result = []
        const visited = {}
        stack.push(start)
        while(stack.length){
            let vertex = stack.pop()
            result.push(vertex)
            this.adjacencyList[vertex].forEach(element => {
                if (!visited[element]) {
                    stack.push(element)
                    visited[element]=true
                }
            });
        }
        return result
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addEdge('A','B')
graph.addEdge('C','B')
graph.addEdge('Z','L')
graph.addEdge('C','L')
// const result = graph.depthFirstSearch('A')
console.log(result);