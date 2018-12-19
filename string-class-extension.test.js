require('./index');

describe('Testing if a string has Vowels', () => {
   test('A simple case where no vowel exist', () => {
       expect('dry'.hasVowels()).toBeFalsy();
   });
   test('A simple case where a vowel exist', () => {
       expect('Gray'.hasVowels()).toBeTruthy();
   });
   test('A simple case where an uppercase vowel exist', () => {
      expect('Add'.hasVowels()).toBeTruthy();
    });
    test('A simple case of empty string', () => {
       expect('Add'.hasVowels()).toBeFalsy();
    });
});