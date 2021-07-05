'use strict';

const LinkedList = require('../LinkedList');

describe('LinkedList khFromEnd', () => {
  it('k greater than the length', () =>{
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(3);
    ll.insert(8);
    ll.insert(2);
    expect(ll.kthFromEnd(5)).toEqual('Exception');
  });
  it('k is the same of the length',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(3);
    ll.insert(8);
    ll.insert(2);
    expect(ll.kthFromEnd(3)).toEqual(1);
  });
  it(' k is negative integer', ()=>{
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(3);
    ll.insert(8);
    ll.insert(2);
    expect(ll.kthFromEnd(-3)).toEqual('Exception');
  });
  it('linkedlist size 1', ()=>{
    let ll = new LinkedList();
    ll.insert(800);
    expect(ll.kthFromEnd(0)).toEqual(800);
  });
  it('k in the middle',() =>{
    let ll= new LinkedList();
    ll.insert (1);
    ll.insert(3);
    ll.insert(8);
    expect(ll.kthFromEnd(1)).toEqual(3);
  });
});
