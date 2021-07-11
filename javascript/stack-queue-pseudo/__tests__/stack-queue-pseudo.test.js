'use strict';

const PseudoQueue = require('../stack-queue-pseudo');

let pseudoQueue ;

beforeEach(() => {
  pseudoQueue = new PseudoQueue;
});

describe ('stack-queue-pseudo', () => {
  it ('Happy path - Expected outcome enqueue', () => {
    pseudoQueue.enqueue(100);
    pseudoQueue.enqueue(200);

    expect (pseudoQueue.pushStack.peek().value).toEqual(200);
  });
  it ('Happy path - Expected outcome dequeue', () => {
    pseudoQueue.enqueue(100);
    pseudoQueue.dequeue();

    expect (pseudoQueue.popStack.isEmpty()).toBe(true);
  });
  it ('Happy path - Expected outcome peek', () => {
    pseudoQueue.enqueue(100);
    pseudoQueue.enqueue(200);

    expect (pseudoQueue.peek().value.value).toEqual(100);
  });
  it ('dequeue from empty stack return exception', () => {
    expect (pseudoQueue.dequeue()).toEqual('Exception');
  });
  it ('peek from empty stack return exception', () => {
    expect (pseudoQueue.peek()).toEqual('Exception');
  });

});
