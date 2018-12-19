// hasVowels (typeof Boolean): Returns true if the string contains vowels. 
// This method implements Regular Expression.
String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this); 
};

// toUpper (typeof String): Returns the String in question but with all characters in upper
// cases as applicable. This method should be implemented without the use of the
// toUpperCase internal methods.

String.prototype.toUpper = function () {
    const check = /[a-z]/;
    let result = '';
        for(let i = 0; i<this.length; i++){
        result += this[i].replace(check, String.fromCharCode(this[i].charCodeAt(0)-32));
        }
    return result;
  };

// toLower (typeof String): Returns the String in question but with all characters in their lowercases as applicable. This method should be implemented without the use of the
// toLowerCase internal methods.

String.prototype.toLower = function () {
    const check = /[A-Z]/;
    let result = '';
        for(let i = 0; i<this.length; i++){
        result += this[i].replace(check, String.fromCharCode(this[i].charCodeAt(0)+32));
        }
    return result;
  };

  // ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
String.prototype.ucFirst = function () {
    return (this[0].toUpper() + this.substring(1,this.length));
  };

  // isQuestion (typeof Boolean): Return true if the string is a question (ending with a question
// mark). This method must implement Regular Expression.
String.prototype.isQuestion = function () {
    return /\?$/.test(this);
  };

// words: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
String.prototype.words = function () {
    return this.match(/(\w+)/g)
  };

// wordCount (typeof Number): Returns the number of words in the string. It must make use of the words method above

String.prototype.wordCount = function () {
    return this.words().length;
  };

// fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
String.prototype.fromCurrency = function () {
    return this.replace(/\,/g, '');
  };
module.export =  'String'; 