'use strict';

function quickSort (arr,left,right){
  if (left<right){
    let position = partition (arr,left,right);
    quickSort(arr,left,position-1);
    quickSort(arr,position+1,right);
  }
  return arr;
}

function partition(arr,left,right){
  let pivot = arr[right];
  let least = left -1;
  for(let i=left; i<right; i++){
    if(arr[i] <= pivot){
      least++;
      swap(arr,i,least);
    }
  }
  swap(arr,right,least+1);
  return least+1;
}

function swap (arr,index,least){
  let temp;
  temp = arr[index];
  arr[index] = arr[least];
  arr[least] = temp;
}

module.exports =quickSort;


