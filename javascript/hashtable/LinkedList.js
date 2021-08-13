'use strict';

const Node = require('./Node');

class LinkedList {
  constructor (){
    this.head=null;
  }
  insert(value){
    const node = new Node(value);
    if (!this.head){
      this.head=node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  valuesArr(){
    let valuesArr=[];
    let current = this.head;
    while(current){
      valuesArr.push(current.value);
      current=current.next;
    }
    return valuesArr;
  }
}

module.exports = LinkedList;
