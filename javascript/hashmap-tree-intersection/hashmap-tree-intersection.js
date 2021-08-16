'use strict';

function treeIntersection (bTree1,bTree2){
  let bTree1Values = bTree1.preOrder();
  let bTree2Values = bTree2.preOrder();

  let dublicatedArr = [];

  for (let x=0; x<bTree1Values.length; x++){
    if (bTree1Values[x] === bTree2Values[x]){
      dublicatedArr.push(bTree1Values[x]);
    }
  }
  if(dublicatedArr.length){
    return dublicatedArr;
  }else {
    return 'undefined';
  }
}
module.exports = treeIntersection;
