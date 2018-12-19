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

});
