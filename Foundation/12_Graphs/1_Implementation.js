class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }

    addEdge(v1, v2){
        if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
        if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(conn => conn !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(conn => conn !== v1);
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(const conn of this.adjacencyList[vertex]){ //iterates through the array whose key = vertex
                this.removeEdge(conn, vertex);
            }
        }
        delete this.adjacencyList[vertex];
    }

    dfs(startingVertex){
        const visited = new Set();
        const result = [];
        this.dfsHelper(startingVertex, visited, result);
        return result;
    }
    dfsHelper(vertex, visited, result){
        visited.add(vertex);
        result.push(vertex);
        for(const conn of this.adjacencyList[vertex]){
            if(!visited.has(conn)){
                this.dfsHelper(conn, visited, result);
            }
        }
    }

    bfs(startingVertex){
        const visited = new Set();
        const queue = [startingVertex];
        const result = [];
        visited.add(startingVertex);
        while(queue.length){
            let curr = queue.shift();
            result.push(curr);
            for(const conn of this.adjacencyList[curr]){
                if(!visited.has(conn)){
                    queue.push(conn);
                    visited.add(conn);
                }
            }
        }
        return result;
    }
}

const g = new Graph();
g.addVertex("lko");
g.addVertex("del");
g.addVertex("mum");
g.addVertex("goa");
g.addEdge("lko", "del");
g.addEdge("mum", "del"); //{ lko: [ 'del' ], del: [ 'lko', 'mum' ], mum: [ 'del' ], goa: [] }
g.removeEdge("mum", "del"); //{ lko: [ 'del' ], del: [ 'lko' ], mum: [], goa: [] }
g.addVertex("jai");
g.addVertex("noi");
g.addEdge("del", "jai");
g.addEdge("del", "noi");
g.addEdge("mum", "goa"); //{ lko: [ 'del' ], del: [ 'lko', 'jai', 'noi' ], mum: [ 'goa' ], goa: [ 'mum' ], jai: [ 'del' ], noi: [ 'del' ] }
g.removeVertex("del"); //{ lko: [], mum: [ 'goa' ], goa: [ 'mum' ], jai: [], noi: [] }
console.log(g);

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "E");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
console.log(graph.dfs("A")); // [ 'A', 'B', 'D', 'E', 'C' ]
console.log(graph.bfs("A")); // [ 'A', 'B', 'C', 'E', 'D' ]
