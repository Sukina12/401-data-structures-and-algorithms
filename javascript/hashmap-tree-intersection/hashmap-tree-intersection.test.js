'use strict';

const treeIntersection = require ('./hashmap-tree-intersection');
const BinaryTree = require ('../trees/binaryTree').BinaryTree;
const Node = require ('../hashtable/Node');

describe('tree intersection test',() =>{
  it ('return correct result',() =>{
    const bTree1 = new BinaryTree();

    bTree1.root = new Node(150);
    bTree1.root.left = new Node(100);
    bTree1.root.left.left = new Node(75);
    bTree1.root.left.right = new Node(160);
    bTree1.root.left.right.left = new Node(125);
    bTree1.root.left.right.right = new Node(175);
    bTree1.root.right = new Node(250);
    bTree1.root.right.left = new Node(200);
    bTree1.root.right.right = new Node(350);
    bTree1.root.right.right.left = new Node(300);
    bTree1.root.right.right.right = new Node(500);

    const bTree2 = new BinaryTree();

    bTree2.root = new Node(42);
    bTree2.root.left = new Node(100);
    bTree2.root.left.left = new Node(15);
    bTree2.root.left.right = new Node(160);
    bTree2.root.left.right.left = new Node(125);
    bTree2.root.left.right.right = new Node(175);
    bTree2.root.right = new Node(600);
    bTree2.root.right.left = new Node(200);
    bTree2.root.right.right = new Node(350);
    bTree2.root.right.right.left = new Node(4);
    bTree2.root.right.right.right = new Node(500);

    const dublicatedArr = treeIntersection(bTree1,bTree2);
    expect(dublicatedArr).toEqual([100,160,125,175,200,350,500]);
  });
  it('return undefined if no dublicated',()=>{
    const bTree1 = new BinaryTree();
    bTree1.root = new Node(150);
    bTree1.root.left = new Node(100);
    bTree1.root.right = new Node(250);

    const bTree2 = new BinaryTree();
    bTree2.root = new Node(300);
    bTree2.root.left = new Node(180);
    bTree2.root.right = new Node(320);

    const dublicatedArr = treeIntersection(bTree1,bTree2);
    expect(dublicatedArr).toEqual('undefined');
  });
});
