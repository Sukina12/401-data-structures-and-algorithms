'use strict';

const HashTable = require('./Hashtable');

describe('hashTable working', () => {
  it('should sucessfully create a hash table', () => {
    const hashMap = new HashTable(400);

    expect(hashMap.storage.length).toEqual(400);
  });
  it('should sucessfully Adding a key/value to your hashtable', () => {
    const hashMap = new HashTable(400);
    let key = 'name';
    hashMap.add(key,'sukina');
    expect(hashMap.storage[hashMap.hash(key)]).toBeDefined();
  });
  it('should sucessfully Retrieving based on a key returns the value stored', () => {
    const hashMap = new HashTable(400);
    let key = 'name';
    hashMap.add(key,'sukina');
    let result = hashMap.get(key);
    // console.log('result',result);
    expect(result.head.value).toEqual({'name': 'sukina'});
  });
  it('should Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashMap = new HashTable(400);
    expect(hashMap.get('hello')).toBeNull();
  });
  it('should sucessfully handle a collision within the hashtable', () => {
    const hashMap = new HashTable(400);
    let key = 'name';
    hashMap.add(key,'sukina');
    hashMap.add(key,'sewar');
    let result = hashMap.get(key);
    // console.log('result',result.head.next);
    expect(result.head.next.value).toEqual({'name':'sewar'});
  });
  it('should Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashMap = new HashTable(400);
    let key = 'name';
    hashMap.add(key,'sukina');
    hashMap.add(key,'peace');
    let result = hashMap.get(key);
    // console.log('result',result.head.next);
    expect(result.head.next.value).toEqual({'name':'peace'});
  });
  it('should Successfully hash a key to an in-range value', () => {
    const hashMap = new HashTable(400);
    let key = 'name';
    hashMap.add(key,'sukina');
   
    let result = hashMap.hash(key);
    // console.log('result',result);
    expect(result).toEqual(323);
  });

});
