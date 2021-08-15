
'use strict';

function repeatedWord (paragraph){
  const words = paragraph.split(/[\s,]+/);

  let resultArr = [];

  for (let i=0; i<words.length; i++){
    let wordTolower = words[i].toLowerCase();

    const contains = resultArr.includes(wordTolower);

    if(contains) {
      return wordTolower;
    }

    resultArr.push(wordTolower);
  }
  return 'The Is No Duplicate Words ! ^_^';
}

module.exports = repeatedWord;
