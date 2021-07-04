'use strict';

const LinkedList = require('../LinkedList');
describe('Linked-List Insertion', () => {
  it ('Add Node At The end of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.append(30);

    expect(ll.toString()).toEqual('{10}->{20}->{30}->NULL');
  });
  it ('Add Multiple Nodes At The end of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.append(30);
    ll.append(40);
    ll.append(50);

    expect(ll.toString()).toEqual('{10}->{20}->{30}->{40}->{50}->NULL');
  });
  it ('insert a Node before the middle node of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    ll.insertBefore(20,80);
    let inserted = ll.toString();
    let array = inserted.split('->');
    expect(array[1]).toEqual('{80}');
  });
  it ('insert a Node before the first node of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insertBefore(10,80);
    let inserted = ll.toString();
    let array = inserted.split('->');
    expect(array[0]).toEqual('{10}');
  });
  it ('insert a Node after the middle node of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    ll.insertAfter(20,80);
    let inserted = ll.toString();
    let array = inserted.split('->');
    expect(array[2]).toEqual('{80}');
  });
  it ('insert a Node after the last node of linkedList', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    ll.append(80);
    expect(ll.toString()).toEqual('{10}->{20}->{30}->{80}->NULL');
  });
});
