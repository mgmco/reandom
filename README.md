# Reandom (readable + random)

Generating random strings is easy, but how about generating ones that are readable? Memorable? Something a human may actually be able to pronounce? We tried to solve this problem.

## Features

There are a couple solutions out there for how to do this already, but none that truly satisfied us. So we wrote a library that:

 * Generates a random string of whatever length you desire where a vowel will always be put in between consonants
 * A blacklist is available to remove words that you'd prefer to avoid showing up

## Usage

The most basic use is to do an `npm install reandom` and then:

```javascript
var Reandom = require('reandom');
var myRandomSring = Reandom.generate(); // the string!
```

### Setting the length of the word

```javascript
var Reandom = require('reandom');
var myRandomSring = Reandom.generate(12); // this will return a 12 character word
var myOtherRandomString = Reandom.wordLength(12).generate(); // this also gives 12 characters
```

### Blacklisting words

Note that due to the fact that the words are generated in the pattern of consonant + vowel + consonant, you don't need to worry about most of the usual words (with some exceptions). But this could also be used to ensure there are no duplicates for a truly random string.

```javascript
var Reandom = require('reandom');

// let's generate a couple strings to blacklist
var string1 = Reandom.generate();
var string2 = Reandom.generate();
var string3 = Reandom.generate();
var string4 = Reandom.generate();
var string5 = Reandom.generate();

var blacklist = [ string1, string2, string3, string4, string5 ];

var myRandomSring = Reandom.blacklist(blacklist).generate();
```
