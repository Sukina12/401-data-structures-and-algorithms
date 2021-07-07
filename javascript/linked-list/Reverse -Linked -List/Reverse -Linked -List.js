'use strict';

function reverse(head) {
  let previousNode = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = previousNode;
    previousNode = head;
    head = nextNode;
  }

  return previousNode;
}

module.exports = reverse;
