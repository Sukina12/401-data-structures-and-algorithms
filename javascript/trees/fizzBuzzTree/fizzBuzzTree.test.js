'use strict';

const fizzBuzzTree = require('../fizzBuzzTree/fizzBuzzTree').fizzBuzzTree;
const KaryTree = require('../fizzBuzzTree/fizzBuzzTree').KaryTree;
const Node = require('../fizzBuzzTree/fizzBuzzTree').Node;

describe('fizzBuzz tree', () => {
  it ('return correct output', ()=>{
    let myKaryTree = new KaryTree();
    let root = myKaryTree.root = new Node (1,3);
    let first = root.children[0] = new Node (20,3);
    let seconde = root.children[1] = new Node (10,2);
    let third = root.children[2] = new Node (18,1);

    first.children[0] = new Node (3,0);
    first.children[1] = new Node (90,0);
    first.children[2] = new Node (24,0);

    seconde.children[0] = new Node (100,0);
    seconde.children[1] = new Node (27,0);

    third.children[0] = new Node (45,0);

    let result = [ '1','Buzz','Buzz', 'Fizz','Fizz', 'FizzBuzz','Fizz', 'Buzz','Fizz', 'FizzBuzz'];

    expect (fizzBuzzTree(myKaryTree).breadth()).toEqual(result);
  });
});
