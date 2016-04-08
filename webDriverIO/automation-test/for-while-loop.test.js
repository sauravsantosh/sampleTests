FOR and WHILE LOOP

var webdriverio = require('webdriverio');
var chai = require('chai');
var expect = require('chai').expect;

describe('Learn FOR and WHILE LOOP', function(){

  var word = "saurav";
  var newWord = "santosh"

it('for looping test case', function(){

for (i = 0; i < word.length; i++){
  console.log('my name is: ' +word);
  console.log(word[i]);
};


});

it('while looping test case', function(){

var i = 0;
while(i < newWord.length){
  console.log('last name is: ' +newWord);
  i++;
};

});

});
