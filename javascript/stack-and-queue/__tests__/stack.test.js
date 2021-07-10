'use strict';

const Stack = require('../stack');
let newStack;

beforeEach(() => {
  newStack = new Stack;
});

describe ('Stack Working', () => {
  it ('can push to stack', () => {
    newStack.push(10);
    expect(newStack.size).toEqual(1);
  });
  it ('can push multiple values',() => {
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);
    expect(newStack.size).toEqual(3);
  });
  it ('can pop from stack',()=>{
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);

    newStack.pop(30);
    console.log(newStack);
    expect(newStack.size).toEqual(2);

  });
  it ('can peek the next item', ()=>{
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);

    newStack.peek();
    expect(newStack.peek()).toEqual(newStack.top);
  });
  it('can instantiate an empty stack',() =>{
    expect(newStack.size).toEqual(0);
  });
  it('can pop or peek on empty stack ',()=>{
    expect(() => {
      newStack.expectEmpty();

    }).toThrow(Error);
  });
});
