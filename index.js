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
  }

  // ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
String.prototype.ucFirst = function () {
    return (this[0].toUpper() + this.substring(1,this.length));
  }

  // isQuestion (typeof Boolean): Return true if the string is a question (ending with a question
// mark). This method must implement Regular Expression.
String.prototype.isQuestion = function () {
    return /\?$/.test(this);
  }
module.export =  'String'; 