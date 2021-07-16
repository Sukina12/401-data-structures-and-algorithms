'use strict';

const duckDuckGoose = require('../Duck-Duck-Goose');

describe ('DuckDuckGoose Game ', () => {
  it ('return message if enter empty list', () => {
    expect(duckDuckGoose([],4)).toEqual ('Unexpected List Without Values');
  });
  it ('return the last person string in the list correct', () => {

    expect(duckDuckGoose(['S','A','R','M','O','T'],3)).toEqual ('The last Person is : S ');
  });

});
