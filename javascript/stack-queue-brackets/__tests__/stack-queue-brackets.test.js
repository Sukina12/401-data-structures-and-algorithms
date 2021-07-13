'use strict';

const validateBrackets = require('../stack-queue-brackets');

const {expect} =require ('@jest/globals');

describe('validateBrackets working', () => {
  it('Happy Path return true ', () => {
    expect (validateBrackets('()')).toBe(true);
    expect (validateBrackets('(){}[]')).toBe(true);
    expect (validateBrackets('(){[]}')).toBe(true);
    expect (validateBrackets('(){Sukina}[lab13]({})')).toBe(true);
  });
  it('Edge Case Not Enter Input',()=>{
    expect (validateBrackets()).toBe('You Must Enter Input');
  });
});
