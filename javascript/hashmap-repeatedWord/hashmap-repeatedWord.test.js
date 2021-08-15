'use strict';

const repeatedWord = require ('./hashmap-repeatedWord');

const parag1 ='Once upon a time, there was a brave princess who...';
const parag2 ='It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const parag3 ='It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
const parag4 ='My Name Is Sukina';

describe('Repeated Word test working',()=>{
  it ('should find the first word to occur more than once in a string',()=>{
    expect(repeatedWord(parag1)).toBe('a');
    expect(repeatedWord(parag2)).toBe('it');
    expect(repeatedWord(parag3)).toBe('summer');
  });
  it ('should return message if no repeated word',()=>{
    expect(repeatedWord(parag4)).toBe('The Is No Duplicate Words ! ^_^');
  });
});

