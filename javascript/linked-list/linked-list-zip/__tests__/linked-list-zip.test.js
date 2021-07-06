'use strict';

const LinkedList = require('../../LinkedList');
const zipList = require('../linked-list-zip');

describe('zip linked list', () => {
  it('empty two linked list', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();

    expect(zipList(ll1, ll2).toString()).toEqual('Exception');
  });
  it('The two linked list the same length', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    const ll3 = new LinkedList();

    ll1.insert(100);
    ll1.insert(200);

    ll2.insert(300);
    ll2.insert(400);

    ll3.insert(100);
    ll3.insert(300);
    ll3.insert(200);
    ll3.insert(400);

    expect(zipList(ll1, ll2).toString()).toEqual(ll3.toString());
  });
  it('The two linked list different length , ll1Length < ll2Length', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    const ll3 = new LinkedList();

    ll1.insert(100);
    ll1.insert(200);

    ll2.insert(300);
    ll2.insert(400);
    ll2.insert(500);

    ll3.insert(100);
    ll3.insert(300);
    ll3.insert(200);
    ll3.insert(400);
    ll3.insert(500);

    expect(zipList(ll1, ll2).toString()).toEqual(ll3.toString());
  });
  it('The two linked list different length , ll1Length > ll2Length', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    const ll3 = new LinkedList();

    ll1.insert(100);
    ll1.insert(200);
    ll1.insert(500);
    ll1.insert(600);

    ll2.insert(300);
    ll2.insert(400);

    ll3.insert(100);
    ll3.insert(300);
    ll3.insert(200);
    ll3.insert(400);
    ll3.insert(500);
    ll3.insert(600);

    expect(zipList(ll1, ll2).toString()).toEqual(ll3.toString());
  });
});
