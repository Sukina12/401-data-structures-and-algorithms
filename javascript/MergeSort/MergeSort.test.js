'use strict';

const mergeSort = require ('./MergeSort');

describe ('mergeSort working', ()=> {
  it ('return empty array', ()=>{
    let arr = [];
    expect(mergeSort(arr)).toEqual('Empty Array');
  });
  it('correct result',()=>{
    let arr = [8,4,23,42,16,15];
    expect(mergeSort(arr)).toEqual([4,8,15,16,23,42]);
  });

});
