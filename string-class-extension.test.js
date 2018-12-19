require('./index');

//test for hasVowel function
describe('Testing if a string has Vowels', () => {
   test('A simple case where no vowel exist', () => {
       expect('dry'.hasVowels()).toBeFalsy();
   });
   test('A simple case where a vowel exist', () => {
       expect('who'.hasVowels()).toBeTruthy();
   });
   test('A simple case where an uppercase vowel exist', () => {
      expect('Add'.hasVowels()).toBeTruthy();
    });
    test('A simple case of empty string', () => {
       expect(''.hasVowels()).toBeFalsy();
    });
});

//test for toUpper function
describe('Changes the case of a string to Uppercase', () => {
  test('A simple case of all lowercase letters of a string ', () => {
      expect('dry'.toUpper()).toBe('DRY');
  });
  test('A  case of all uppercase letters of a string ', () => {
      expect('HOME'.toUpper()).toBe('HOME');
  });
  test('A  case of mixed case letters of a string ', () => {
      expect('DEcaGOn'.toUpper()).toBe('DECAGON');
  });
  test('A  case of non letters and letters ', () => {
      expect('123ab'.toUpper()).toBe('123AB');
  });
});

//test for toLower function
describe('Changes the case of a string to Uppercase', () => {
  test('A simple case of all lowercase letters of a string ', () => {
      expect('dry'.toLower()).toBe('dry');
  });
  test('A  case of all uppercase letters of a string ', () => {
      expect('HOME'.toLower()).toBe('home');
  });
  test('A  case of mixed case letters of a string ', () => {
    expect('DEcaGOn'.toLower()).toBe('decagon');
  });
  test('A  case of non letters and letters ', () => {
      expect('123aB'.toLower()).toBe('123ab');
  });
});

//test for ucFirst function
describe('Changes the case of the first character in a string to Uppercase', () => {
  test('A simple case of all lowercase letters of a string ', () => {
      expect('gist'.ucFirst()).toBe('Gist');
  });
  test('A  case of all uppercase letters of a string ', () => {
      expect('HOME'.ucFirst()).toBe('HOME');
  });
  test('A case of a mixed string ', () => {
    expect('DecoraTE'.ucFirst()).toBe('DecoraTE');
  });
});

//test for isQuestion function
describe('Checks if a string is a question', () => {
  test('A simple case of a sentence expression', () => {
      expect('i want to go home'.isQuestion()).toBeFalsy();
  });
  test('A case of a question with question mark', () => {
      expect('Do you have a pen?'.isQuestion()).toBeTruthy();
  });
  test('when the question is within the words', () => {
    expect('Do ?you have a pen'.isQuestion()).toBeFalsy();
  });
});

//Return a list of words in a string
describe('Array of words in a string', () => {
  test('A simple case of a word', () => {
      expect('boss'.words()).toEqual([ 'boss' ]);
  });
  test('a sentence of several word', () => {
    expect('my age is 12 years old'.words()).toEqual([ 'my', 'age', 'is', '12', 'years', 'old' ]);
  });
  test('A case of an empty string', () => {
    expect(''.words()).toBe(null);
  });
});

//wordCount returns the number of the words in a string
describe('returns the nubmer of words in a string', () => {
  test('A simple case of a word', () => {
      expect('boss'.wordCount()).toEqual(1);
  });
  test('a sentence of several word', () => {
    expect('my age is 12 years old'.wordCount()).toEqual(6);
  });
});

//Returns a number representation of the Currency String
describe('returns the nubmer of words in a string', () => {
  test('A simple case of a string', () => {
      expect('11,111.1'.fromCurrency()).toEqual(11111.1);
  });
  test('a case of a million', () => {
    expect('1,000,000'.fromCurrency()).toEqual(1000000);
  });
});
