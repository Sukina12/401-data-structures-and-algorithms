'use strict';

const Queue = require('../queue');

let newQueue;

beforeEach(() => {
  newQueue = new Queue();
});

describe ('Queue Working', () => {
  it ('can enqueue to queue', () => {
    newQueue.enqueue(10);
    expect(newQueue.size()).toEqual(1);
  });
  it ('can enqueue multiple values',() => {
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    expect(newQueue.size()).toEqual(3);
  });
  it ('can dequeue from queue',()=>{
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);

    newQueue.dequeue();
    expect(newQueue.dequeue().value).toEqual(20);

  });
  it ('can peek into a queue', ()=>{
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);

    newQueue.peek();
    expect(newQueue.peek().value).toEqual(10);
  });
  it('can instantiate an empty Queue',() =>{
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);

    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.dequeue().value).toEqual(30);
  });
  it('can dequeue or peek on empty queue',()=>{
    expect(() => {
      newQueue.expectEmpty();

    }).toThrow(Error);
  });
});
