'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.memory = {};
    this.size=0;
    this.top ={};
  }

  push(value){
    this.top = new Node (value);
    this.memory[this.size] = this.top;
    this.size++;
  }

  pop (){
    this.exceptEmpty();
    let top = this.top;
    delete this.memory[this.size-1];
    this.size--;
    this.top = this.memory[this.size-1];
    return top;
  }
  peek (){
    this.exceptEmpty();
    return this.top;
  }
  isEmpty(){
    return this.size === 0;
  }
  exceptEmpty(){
    if (this.isEmpty()){
      throw new Error ('Empty Stack');
    }
  }
}

module.exports = Stack;
