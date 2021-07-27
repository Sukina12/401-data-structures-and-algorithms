'use strict';
const Queue = require('../../stack-and-queue/queue');

class Node {
  constructor (value){
    this.value = value;
    this.children=[];
  }
}

class KaryTree {
  constructor(){
    this.root=null;
  }
  breadth() {
    let result = [],
      current;
    let queue = new Queue();
    if (this.root) {
      current = this.root;
      queue.enqueue(current);
    } else return 'Tree Empty';
    while (queue.peek()) {
      current = queue.dequeue().value;
      result.push(current.value);
      // console.log('current', current);
      for (let i = 0; i < current.children.length; i++)
        if (current.children[i]) {
          queue.enqueue(current.children[i]);
        }
    }
    console.log(result);
    return result;

  }
}
function fizzBuzzTree (tree){
  if(tree.root === null){
    return 'It Is Empty Tree !';
  }

  const traversal = (node) => {
    if (node.value % 15 === 0) node.value ='FizzBuzz';
    else if (node.value % 3 === 0) node.value ='Fizz';
    else if (node.value % 5 === 0) node.value ='Buzz';
    else node.value = `${node.value}`;

    for (let x=0; x<node.children.length; x++){
      traversal(node.children[x]);
    }
  };
  traversal(tree.root);
  return tree;
}

module.exports = {KaryTree, fizzBuzzTree, Node };

