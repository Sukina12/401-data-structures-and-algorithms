'use strict';

const quickSort = require('./QuickSort');

describe('quickSort working', () => {
  it('should return expected output', () => {
    let arr = [8, 4, 23, 42, 16, 15];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('reverse sorted',() =>{
    let arr= [28,10,9,4,-6];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([-6,4,9,10,28]);
  });
  it('Nearly sorted',() =>{
    let arr= [2,3,5,7,13,11];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([2,3,5,7,11,13]);
  });
  it('Few umiques',() =>{
    let arr= [5,12,7,5,5,7];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([5,5,5,7,7,12]);
  });
});
