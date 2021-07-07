'use strict';

const LinkedList = require('../../linked-list');
const reverse = require('./Reverse -Linked -List');

describe('reverse linked list', () => {
  it ('should return reverse linked list', () => {
    let ll1 = new LinkedList();

    ll1.insert(100);
    ll1.insert(200);
    ll1.insert(300);

    let ll2 = new LinkedList();

    ll2.insert(300);
    ll2.insert(200);
    ll2.insert(100);

    expect(reverse(ll1.head)).toEqual(ll2.head);
  });
});
