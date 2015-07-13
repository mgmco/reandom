'use strict';

var VOWELS = 'a e i o u y'.split(' ');
var CONSONANTS = 'b c d f g h j k l m n p q r s t v w x y z'.split(' ');
var length = 5;
var blacklist = [];

var grabLetter = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wordIsBlacklisted = function(word) {
  return (blacklist.length === 0) ? false : (blacklist.indexOf(word) > -1);
};

exports.generate = function(requestedLength) {
  if (typeof requestedLength !== 'number') requestedLength = length;
  var out = '';
  var onLetter = 0;
  var vowel = false;

  while (onLetter < requestedLength) {
    var array = vowel ? VOWELS : CONSONANTS;
    out += grabLetter(array);

    if (!wordIsBlacklisted(out)) {
      onLetter++;
      vowel = !vowel;
    } else {
      onLetter = 0;
      vowel = false;
      out = '';
    }
  }

  return out;
};

exports.wordLength = function(newLength) {
  if (typeof newLength === 'number') length = newLength;
  return this;
}

exports.blacklist = function(array) {
  if (Array.isArray(array)) blacklist = array;
  return this;
}
