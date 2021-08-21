'use strict';

// const Vertex = require ('./vertex');
const Edge = require ('./edge');

class Graph {
  constructor (){
    this._adjacencyList= new Map ();
  }

  addNode (vertex){
    this._adjacencyList.set(vertex,[]);
    return vertex;
  }

  addEdge (startVertex, endVertex){
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      return 'Invalid Vertex';
    } else {
      const adjacencies = this._adjacencyList.get(startVertex);
      const edge = new Edge(endVertex);
      adjacencies.push(edge);
      return edge;
    }
  }
  printAll(){
    for (const [vertex,edge] of this._adjacencyList.entries()){
      console.log(vertex);
      console.log(edge);
    }
  }
  getNodes(){
    return this._adjacencyList.entries();
  }
  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      return 'Invalid';
    } else {
      return this._adjacencyList.get(vertex);
    }
  }
  getSize (){
    return this._adjacencyList.size>0 ? this._adjacencyList.size : null;
  }
}

module.exports = Graph;

// const graph = new Graph();
// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six= new Vertex(6);
// const four = new Vertex(4);

// graph.addNode(ten);
// graph.addNode(two);
// graph.addNode(six);
// graph.addNode(four);

// graph.addEdge(ten,two);
// graph.addEdge(ten,six);
// graph.addEdge(two,six);
// graph.addEdge(six,four);
// graph.addEdge(two,four);

// console.log(graph);
// graph.printAll();
