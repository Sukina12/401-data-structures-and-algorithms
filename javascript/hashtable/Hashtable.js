'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key){
    const sumCharCode = key.split('').reduce((acc,char) => {
      return acc+char.charCodeAt(0);
    },0);
    const hashKey = (sumCharCode*19)%this.size;
    return hashKey;
  }
  add(key,value){
    let hashKey = this.hash(key);

    if(!this.storage[hashKey]){
      const ll = new LinkedList();
      ll.insert({[key]:value});
      this.storage[hashKey] = ll;
    } else {
      this.storage[hashKey].insert({[key]:value});

    }
  }
  contains(key){
    let hashKey=this.hash(key);
    if(this.storage[hashKey]){
      return true;
    }
    return false;
  }
  get(key){
    let hashKey =this.hash(key);
    if(this.storage[hashKey]){
      return this.storage[hashKey];
    }else {
      return null;
    }
  }
}

// const hashMap = new HashTable(400);
// hashMap.add('name','sukina');
// hashMap.add('one','test');
// hashMap.add('neo','test1');

// console.table(hashMap.storage);
// console.table(hashMap.storage[118].head);


module.exports = HashTable;
