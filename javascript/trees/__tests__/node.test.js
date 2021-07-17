'use strict';

const Node = require ('../node');

describe ('Node Working', () => {
  it ('create new node fron Node class', () =>{
    const myNode = new Node();
    expect( myNode instanceof Node).toBeTruthy();
  });
  
  it ('create new node fron Node class with properties', () =>{
    const myValue = 'sukina';
    const myNode = new Node(myValue);
    expect (myNode.value).toEqual(myValue);
    expect (myNode.left).toBeNull();
    expect (myNode.right).toBeNull();
  });
});
