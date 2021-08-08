'use strict';

const insertionSort = require('./InsertionSort');

describe('insertionSort test function',() => {
  it ('correct result',() => {
    let arr= [10, 9, 4, 28, -6];
    expect(insertionSort(arr)).toEqual([-6,4,9,10,28]);
  });
  it('reverse sorted',() =>{
    let arr= [28,10,9,4,-6];
    expect(insertionSort(arr)).toEqual([-6,4,9,10,28]);
  });
  it('empty array',()=>{
    let arr =[];
    expect(insertionSort(arr)).toEqual('Empty Array');
  });
  it('Nearly sorted',() =>{
    let arr= [2,3,5,7,13,11];
    expect(insertionSort(arr)).toEqual([2,3,5,7,11,13]);
  });
  it('Few umiques',() =>{
    let arr= [5,12,7,5,5,7];
    expect(insertionSort(arr)).toEqual([5,5,5,7,7,12]);
  });
});
