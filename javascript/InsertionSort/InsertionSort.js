'use strict';

function insertionSort (arr) {
  if(arr.length === 0){
    return `Empty Array`;
  }

  for (let x=1; x<arr.length; x++){
    for (let y = x; y>0; y--){
      if(arr[y]<arr[y-1]){
        const temValue= arr[y];
        arr[y] = arr[y-1];
        arr[y-1] = temValue;
      }else {
        break;
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
