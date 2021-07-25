'use strict';

const Node = require ('../node');
const BinaryTree = require('../binaryTree');

describe ('Binary Tree Working', () => {
  let binaryTree ;
  beforeAll(() => {
    const a= new Node ('a');
    const b = new Node ('b');
    const c = new Node ('c');
    const d = new Node ('d');
    const e = new Node ('e');
    const f = new Node ('f');
    const g = new Node ('g');
    const h = new Node ('h');
    const i = new Node ('i');
    a.left = b;
    a.right =c;
    b.left= f;
    c.left = d;
    c.right = e;
    f.right = g;
    g.left = h;
    g.right =i;

    binaryTree = new BinaryTree(a);
  });
  it ('PreOrder test', () => {
    let expectedResult =['a','b','f','g','h','i','c','d','e'];
    expect (binaryTree.preOrder()).toEqual(expectedResult);
  });
  it ('PostOrder test', () => {
    let expectedResult =['h','i','g','f','b','d','e','c','a'];
    expect (binaryTree.postOrder()).toEqual(expectedResult);
  });
  it ('InOrder test', () => {
    let expectedResult =['f','h','g','i','b','a','d','c','e'];
    expect (binaryTree.inOrder()).toEqual(expectedResult);
  });
  it ('Find The Max Value for empty tree return message', () => {
    binaryTree = new BinaryTree ();
    expect (binaryTree.maxValueFinder()).toEqual('No Values in The Tree ');
  });
  it ('Find The Max Value ', () => {
    const a =  new Node (2);
    const b = new Node (7);
    const c = new Node (5);
    const d = new Node (2);
    const e = new Node (6);
    const f = new Node (9);
    const g = new Node (5);
    const h = new Node (11);
    const i = new Node (4);
    a.left = b;
    a.right =c;
    b.left= d;
    b.right=e;
    c.right = f;
    e.left = g;
    e.right =h;
    f.left = i;


    binaryTree = new BinaryTree (a);
    expect (binaryTree.maxValueFinder()).toEqual(11);
  });

});
