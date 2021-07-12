'use strict';

const Queue = require('../stack-and-queue/queue');

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cats.enqueue(animal);
    } else if (animal.type === 'dog') {
      this.dogs.enqueue(animal);
    } else {
      return 'animal can be either a dog or a cat object';
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      if (!this.cats.isEmpty()) {
        return this.cats.dequeue(pref);
      } else {
        return 'Cats Shelder Is Empty';
      }
    } else if (pref === 'dog') {
      if (!this.dogs.isEmpty()) {
        return this.dogs.dequeue(pref);
      } else {
        return 'Dogs Shelder Is Empty';
      }
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
