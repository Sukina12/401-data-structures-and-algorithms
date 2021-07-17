'use strict';
const Node = require('./node');

class BinarySearchTree {
  constructor(root =null){
    this.root = root;
  }
  addValue(value){
    let myNode = new Node(value);
    if(this.root === null){
      this.root = myNode;
    }else {
      this.checkMax(this.root,myNode);
    }
  }
  contains(value){
    let temp = this.root;
    while (temp){
      if (temp.value === value){
        return true;
      }
      if (value < temp.value){
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }

  checkMax(root,node){
    if (node.value < root.value){
      if (root.left === null) {
        root.left = node;
      }else {
        this.checkMax (root.left,node);
      }
    } else if (node.value > root.value){
      if (root.right === null) {
        root.right = node;
      }else {
        this.checkMax (root.right,node);
      }
    }
  }
}
module.exports = BinarySearchTree;
