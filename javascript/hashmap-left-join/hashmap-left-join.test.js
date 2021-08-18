'use strict';

const HashTable = require('../hashtable/Hashtable');
const leftJoin = require('./hashmap-left-join');

describe('leftJoin test working', () => {
  const hashMap1 = new HashTable();
  const hashMap2 = new HashTable();

  hashMap1.add('name', 'Sukina');
  hashMap1.add('age', '31');

  hashMap2.add('name', 'Sewar');
  hashMap2.add('gender', 'female');
  it('successfully return correct result', () => {
    expect(leftJoin(hashMap1, hashMap2)).toEqual([['name', 'Sukina', 'Sewar'], ['age', '31', null]]);
  });
});
