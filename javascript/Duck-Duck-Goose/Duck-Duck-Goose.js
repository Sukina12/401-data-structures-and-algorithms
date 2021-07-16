'use strict';

const Queue = require ('../stack-and-queue/queue');

let myQueue = new Queue();

let dequeueValue = '';

function duckDuckGoose (listOfString , k){
  if (listOfString.length !== 0){
    for (let x=0; x<listOfString.length; x++){
      myQueue.enqueue (listOfString[x]);
    }
  }else {
    return 'Unexpected List Without Values';
  }

  while (myQueue.size() !== 1 ){
    for (let y =0 ; y< k-1; y++){
      dequeueValue = myQueue.dequeue();
      myQueue.enqueue(dequeueValue.value);
    }
    myQueue.dequeue();
  }
  return `The last Person is : ${myQueue.dequeue().value} `;
}

module.exports = duckDuckGoose;
