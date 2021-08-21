'use strict';

const Vertex = require('./vertex');
// const Edge = require('./edge');
const Graph = require('./graph');

describe('graph working test', () => {
  const graph = new Graph();
  const ten = new Vertex(10);
  const two = new Vertex(2);
  const six = new Vertex(6);
  const four = new Vertex(4);

  graph.addNode(ten);
  graph.addNode(two);
  graph.addNode(six);
  graph.addNode(four);

  graph.addEdge(ten, two);
  graph.addEdge(ten, six);
  graph.addEdge(two, six);
  graph.addEdge(six, four);
  graph.addEdge(two, four);

  // console.log(graph);
  // graph.printAll();

  it ('Node can be successfully added to the graph', () => {
    expect (graph.addNode(ten).value).toEqual(10);
  });
  it ('An edge can be successfully added to the graph', ()=>{
    expect (graph.addEdge(ten, two).vertex).toBe(two);
  });
  it ('A collection of all nodes can be properly retrieved from the graph',()=>{
    const allNodes = graph.getNodes();
    expect(allNodes).toBeDefined();
    for (const [vertex] of allNodes){
      expect(vertex).toHaveProperty('value');
    }
  });
  it ('All appropriate neighbors can be retrieved from the graph',()=>{
    let allNeighbors = graph.getNeighbors(ten);
    expect (allNeighbors).toBeDefined();
    // console.log(allNeighbors);
    expect (allNeighbors[0].vertex).toEqual(two);
  });
  it ('Neighbors are returned with the weight between nodes included',()=>{
    let allNeighbors = graph.getNeighbors(ten);
    expect (allNeighbors[0].weight).toEqual(0);
  });
  it ('The proper size is returned, representing the number of nodes in the graph',()=>{
    let size = graph.getSize();
    expect(size).toBeDefined();
    expect(size).toEqual(4);
  });
  it('A graph with only one node and edge can be properly returned',()=>{
    const graph2 = new Graph();

    const seven = new Vertex(7);

    graph2.addNode(seven);

    let nodes = graph2.getNodes();
    // console.log('graph2',graph2);
    expect (nodes).toBeDefined();
    for (const [vertex] of nodes){
      expect(vertex).toHaveProperty('value');
    }
  });
  it ('An empty graph properly returns null',()=>{
    const graph3 = new Graph ();
    expect (graph3.getSize()).toBe (null);
  });
});
