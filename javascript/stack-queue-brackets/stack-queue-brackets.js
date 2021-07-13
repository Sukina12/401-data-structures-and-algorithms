'use strict';

const Stack = require('../stack-and-queue/stack');

function validateBrackets(stringInput) {
  const myStack = new Stack();

  if (stringInput) {
    for (let x = 0; x < stringInput.length; x++) {
      let lastString = myStack[myStack.length - 1];
      if ((stringInput[x] === '(') || (stringInput[x] === '{') || (stringInput[x] === '[')) {
        myStack.push(stringInput[x]);
        if ((lastString === '(' && stringInput[x] === ')') || (lastString === '{' && stringInput[x] === '}') || (lastString === '[' && stringInput[x] === ']')) {
          myStack.pop();
        } if ((stringInput[x]===')') && (lastString!=='(') || (stringInput[x]==='}') && (lastString!=='{') || (stringInput[x]===']') && (lastString!=='[')) {
          return false;
        }
      }
      return myStack.length ? false : true;
    }
  } else {
    return 'You Must Enter Input';
  }
}


module.exports = validateBrackets;
