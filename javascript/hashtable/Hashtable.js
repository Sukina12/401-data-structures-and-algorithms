'use strict';

const LinkedList = require('./LinkedList');


class HashTable {
  constructor(size) {
    this.storage = new Array(size);
  }

  hash(key) {
    const sum = key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0);
    }, 1);
    return (sum * 19) % this.storage.length;
  }

  add(key, value) {
    const bucket = this.hash(key);
    if (!this.storage[bucket]) {
      this.storage[bucket] = new LinkedList();
    }
    this.storage[bucket].insert({ [key]: value });
  }

  contains(key) {
    const bucket = this.hash(key);
    if(this.storage[bucket]){
      return true;
    }else return false;
  }

  get(key) {
    const bucket = this.hash(key);
    if (this.contains(key)) {
      if (this.storage[bucket].head) {
        let current = this.storage[bucket].head;
        if (Object.keys(current.value)[0] === key) return current.value[key];
        while (current.next) {
          current = current.next;
          if (Object.keys(current.value)[0] === key) return current.value[key];
        }
      }
    }
    return null;
  }
}

module.exports = HashTable;

// const hashMap = new HashTable(400);
// hashMap.add('name','sukina');
// hashMap.add('one','test');
// hashMap.add('neo','test1');

// console.table(hashMap.storage);
// console.table(hashMap.storage[118].head);


// module.exports = HashTable;
