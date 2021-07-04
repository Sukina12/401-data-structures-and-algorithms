'use strict';
const Node = require ('./Node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert (value){
    const node = new Node(value);
    if (!this.head){
      this.head = node;
    }else {
      let currentNode = this.head;
      while (currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next=node;
    }
  }
  include (value){
    let currentNode = this.head;
    let result=false;
    while(currentNode.next){
      currentNode = currentNode.next;
      if(currentNode.value === value){
        result = true;
        return result;
      }
    }
    return result;
  }
  toString (){
    let pointer = this.head;
    let result ='';
    while (pointer){
      result += `{${pointer.value}}->`;
      pointer =pointer.next;
      if(!pointer){
        result += 'NULL';
      }
    }
    return result;
  }
  append (value){
    let node = new Node(value);
    if(!this.head){
      this.head=node;
    }else {
      let desiredNode = this.head;
      while (desiredNode.next){
        desiredNode = desiredNode.next;
      }
      desiredNode.next = node;
    }
  }
  insertAfter (value,newValue){
    let node = new Node (newValue);
    let nodeLooper = this.head;
    while(nodeLooper){
      if(nodeLooper.value === value){
        let temNext = nodeLooper.next;
        nodeLooper.next = node;
        node.next = temNext;
        return;
      }
      nodeLooper = nodeLooper.next;
    }
    return 'Exception';
  }

  insertBefore (value,newValue){
    let node = new Node (newValue);
    let nodeLooper = this.head;
    while(nodeLooper.next){
      if(nodeLooper.next.value === value){
        let temNext = nodeLooper.next;
        nodeLooper.next = node;
        node.next = temNext;
        return;
      }
      nodeLooper = nodeLooper.next;
    }
    return 'Exception';
  }

}

module.exports = LinkedList;
