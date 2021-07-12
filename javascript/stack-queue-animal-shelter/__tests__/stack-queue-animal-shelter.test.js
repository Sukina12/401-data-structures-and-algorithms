'use strict';
const { it, expect } = require('@jest/globals');

const AnimalShelter = require('../stack-queue-animal-shelter');

let animalShelter ;

beforeEach (() => {
  animalShelter = new AnimalShelter();
});

describe ('Animal Shelter Working', () => {
  it ('enqueue cat to the shelter', () =>{
    let animal1 = {type :'cat', name : 'MeshMesh'};
    let animal2 = {type : 'cat', name : 'Bogie'};
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    expect(animalShelter.cats.memory[0].value.name).toEqual('MeshMesh');
  });
  it ('enqueue dog to the shelter', () =>{
    let animal1 = {type :'dog', name : 'MeshMesh'};
    let animal2 = {type : 'dog', name : 'Bogie'};
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    expect(animalShelter.dogs.memory[0].value.name).toEqual('MeshMesh');
  });
  it ('dequeue cat from the shelter', () =>{
    let animal1 = {type :'cat', name : 'MeshMesh'};
    let animal2 = {type : 'cat', name : 'Bogie'};
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    expect(animalShelter.dequeue('cat').value.name).toEqual('MeshMesh');
  });
  it ('dequeue dog from the shelter', () =>{
    let animal1 = {type :'dog', name : 'MeshMesh'};
    let animal2 = {type : 'dog', name : 'Bogie'};
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    expect(animalShelter.dequeue('dog').value.name).toEqual('MeshMesh');
  });
  it('return message when enqueue other animal type',() => {
    let animal1 = {type :'horse', name : 'MeshMesh'};
    animalShelter.enqueue(animal1);

    expect(animalShelter.enqueue(animal1)).toEqual ('animal can be either a dog or a cat object');
  });
  it('return Expection when dequeue fromother empty cat shelter',() => {
    expect(animalShelter.dequeue('cat')).toEqual(undefined);
  });
  it('return Expection when dequeue fromother empty dog shelter',() => {
    expect(animalShelter.dequeue('dog')).toEqual(undefined);
  });
  it('dequeue another type from empty shell',() =>{
    expect(animalShelter.dequeue('horse')).toEqual (null);
  });
});
