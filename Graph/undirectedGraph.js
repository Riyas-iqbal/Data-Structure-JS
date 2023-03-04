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
}

const graph = new Graph()

graph.addVertex('A')
graph.addEdge('A','B')
graph.addEdge('C','B')
graph.display()
graph.removeVertex('A')
console.log('new')
graph.display()