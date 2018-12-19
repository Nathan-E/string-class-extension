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
  test('A simple case of lowercase letters of a string ', () => {
      expect('dry'.hasVowels()).toBe('DRY');
  });
});