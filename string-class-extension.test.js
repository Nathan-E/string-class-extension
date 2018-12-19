require('./index');

describe('Testing if a string has Vowels', () => {
   test('A simple case where no vowel exist', () => {
       expect('cvikytq'.hasVowels()).toBeFalsy();
   });
   test('A simple case where Vowel is both upper and lower', () => {
       expect('kiole'.hasVowels()).toBeTruthy();
   });
});