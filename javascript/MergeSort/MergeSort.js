'use strict';

function mergeSort(arr) {
  if (arr.length === 0) {
    return 'Empty Array';
  } else {
    let n = arr.length;
    let mid = Math.floor(n / 2);
    if (n > 1) {
      let left = arr.slice(0, mid);
      let right = arr.slice(mid,n);
      mergeSort(left);
      mergeSort(right);
      merge(left, right, arr);
    }
    return arr;
  }
  function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
    if (i === left.length) {
      arr[k] = right[j];
      j++;
      k++;
    } else {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

module.exports = mergeSort;