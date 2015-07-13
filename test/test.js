var VOWELS = 'a e i o u y'.split(' ');
var CONSONANTS = 'b c d f g h j k l m n p q r s t v w x y z'.split(' ');

var Reandom = require('../index');
var assert = require('assert');

describe('Reandom', function() {
  describe('#generate()', function() {
    it('should return a string of the default length if no length given', function() {
      assert.equal(5, Reandom.generate().length);
    });

    it('should return a string of the provided length if given', function() {
      assert.equal(12, Reandom.generate(12).length);
    });

    it('should return a string in the `CONSONANT + VOWEL` repeating pattern', function() {
      var string = Reandom.generate(10);
      var vowel = false;

      for (var i = 0; i < string.length; i++) {
        assert.equal(true, (vowel ? VOWELS : CONSONANTS).indexOf(string[i]) > -1);
        vowel = !vowel;
      }


    });
  });
  
});
