// hasVowels (typeof Boolean): Returns true if the string contains vowels. 
// This method implements Regular Expression.
String.prototype.hasVowels = function () {
  //the regex literal /[aeiou]/i checks for vowels and the search is case insensitive
  return /[aeiou]/i.test(this);
};

// toUpper (typeof String): Returns the String in question but with all characters in upper
// cases as applicable. This method was implemented without the use of the
// toUpperCase internal methods.

String.prototype.toUpper = function () {
  //the regex literal /[a-z]/ searches for alphabet between a to z
  const check = /[a-z]/;
  let result = '';
  //loops through the characters in the string argument
  for (let index = 0; index < this.length; index++) {
    //the replace method converts lowercase character to uppercase using ASCII table
    result += this[index].replace(check, String.fromCharCode(this[index].charCodeAt(0) - 32));
  }
  return result;
};

// toLower (typeof String): Returns the String in question but with all characters in their lowercases as applicable. 
// This method was implemented without the use of the toLowerCase internal methods.

String.prototype.toLower = function () {
  //the regex literal /[A-Z]/ searches for alphabet between A to Z
  const check = /[A-Z]/;
  let result = '';
  //loops through the characters in the string argument
  for (let index = 0; index < this.length; index++) {
    //the replace method converts Uppercase character to lowercase using ASCII table
    result += this[index].replace(check, String.fromCharCode(this[index].charCodeAt(0) + 32));
  }
  return result;
};

// ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. 
// the toUpper method above was implemented in this method.
String.prototype.ucFirst = function () {
  //makes use of the toUpper function above to change the first character in a string to Uppercase
  return (this[0].toUpper() + this.substring(1, this.length));
};

// isQuestion (typeof Boolean): Return true if the string is a question (ending with a question
// mark). This method implements Regular Expression.
String.prototype.isQuestion = function () {
  //the regex literal checks for question mark at the end of a string(sentence)
  return /\?$/.test(this);
};

// words: Returns a list of the words in the string, as an Array. This method  implements Regular Expression.
String.prototype.words = function () {
  //the regex literals searches for words in a sentence/string, then the match method return the words in an array
  return this.match(/(\w+)/g)
};

// wordCount (typeof Number): Returns the number of words in the string. It makes use of the words method above

String.prototype.wordCount = function () {
  //uses the words function above and return the number of words in the array
  return this.words().length;
};

// fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 return 11111.11
String.prototype.fromCurrency = function () {
  //the regex literal removes comma sign from a number
  return this.replace(/\,/g, '');
};

// inverseCase (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben returns mR. bEN.
String.prototype.inverseCase = function () {
  let result = '';
  //loops through the characters in the string argument
  for (let index = 0; index < this.length; index++) {
    //the regex literal check for lowercase alphabets and changes it to uppercase and vice versa
    /[a-z]/.test(this[index]) ? result += this[index].toUpper() : result += this[index].toLower();
  }
  return result;
};

// aternatinglCase (typeof String): Returns the letters in alternating cases. It starts with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
String.prototype.alternatingCase = function () {
  let result = this[0].toLower();
  //loops through the characters in the string argument
  for (let index = 1; index < this.length; index++) {
    //uses the character index(even and odd) to determine if the character show be lowercase or uppercase
    (index % 2 === 0) ? result += this[index].toLower(): result += this[index].toUpper();
  }
  return result;
};

// numberWords (typeof String): Returns the numbers in words e.g 325 should return three two five.

String.prototype.numberWords = function () {
  const match = {
    0: 'zero ',
    1: 'one ',
    2: 'two ',
    3: 'three ',
    4: 'four ',
    5: 'five ',
    6: 'six ',
    7: 'seven ',
    8: 'eight ',
    9: 'nine '
  };
  let result = '';
  //loops through the characters in the string argument
  for (let index = 0; index < this.length; index++) {
    //match number to their equivalent words
    /[0-9]/.test(this[index]) ? result += match[this[index]] : result += '';
  }
  return result.trim();
};

// isDigit (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. 
// This method implements Regular Expression.
String.prototype.isDigit = function () {
  //the regex literal check if the string passed is a one digit number
  return /^\d$/.test(this);
};


module.export = 'String';