'use strict';

// Require our linked list implementation
const LinkedLilst = require('../LinkedList');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const linklist = new LinkedLilst();
    expect(linklist).toBeDefined();
    expect(linklist.head).toBeNull();
  });
  it('can insert in the linked list', () => {
    const ll = new LinkedLilst();
    ll.insert ('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  it('the head point to the first node', ()=>{
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });
  it('insert multiple nodes', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.head.value).toBeDefined();
    expect(ll.head.next.value).toBeDefined();
    expect(ll.head.next.next.value).toBeDefined();
  });
  it('return true if find the vlaue', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.include('a')).toBeTruthy();
    expect(ll.include('b')).toBeTruthy();
    expect(ll.include('c')).toBeTruthy();
  });
  it('return false if not find the vlaue', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    expect(ll.include('b')).toBeFalsy();
  });
  it('return all values',() => {
    const ll = new LinkedLilst();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBeDefined();
    expect(ll.toString().length).toBeGreaterThan(0);
    expect(ll.toString()).toEqual('{a}->{b}->{c}->NULL');
  });

});
