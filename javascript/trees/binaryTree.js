'use strict';

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  // PreOrder => root -> left -> right
  preOrder() {
    const resultArr = [];
    const _traverse = (node) => {
      resultArr.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return resultArr;
  }

  // PostOrder => left  -> right -> root
  postOrder() {
    const resultArr = [];
    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
      resultArr.push(node.value);
    };
    _traverse(this.root);
    return resultArr;
  }

  // InOrder => left -> root > right
  inOrder() {
    const resultArr = [];
    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      resultArr.push(node.value);
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return resultArr;
  }
  maxValueFinder(){
    if(this.root){
      let maxValue = this.root.value;
      let max = (node) => {
        if (node.value > maxValue){
          maxValue = node.value;
        }
        if(node.left){
          max(node.left);
        }
        if(node.right){
          max(node.right);
        }
      };
      max(this.root);
      return maxValue;
    } else {
      return `No Values in The Tree `;
    }
  }
}
module.exports = BinaryTree;
