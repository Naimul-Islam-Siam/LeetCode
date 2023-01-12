/*
   replace exactly one character with any lowercase English letter 
   so that the resulting string is not a palindrome 
   and that it is the lexicographically smallest one possible.   

   A string a is lexicographically smaller than a string b (of the same length)
   "abcc" is lexicographically smaller than "abcd"

   Return the resulting string. 
   If there is no way to replace a character to make it not a palindrome, return an empty string.

   
   Input: palindrome = "abccba"
   Output: "aaccba"
   Explanation: There are many ways to make "abccba" not a palindrome, 
      such as "zbccba", "aaccba", and "abacba".
      Of all the ways, "aaccba" is the lexicographically smallest.

   Input: palindrome = "a"
   Output: ""
   Explanation: There is no way to replace a single character to make "a" not a palindrome, 
      so return an empty string.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function breakPalindrome(palindrome) {
   if (palindrome.length === 1) {
      return ""; // a single character string is always a palindrome
   }

   let n = Math.floor(palindrome.length / 2);
   palindrome = palindrome.split(""); // string is immutable in js, so convert to array first

   for (let i = 0; i < n; i++) {
      // as palindrom number, length/2 iteration is enough
      if (palindrome[i] != "a") {
         palindrome[i] = "a";

         return palindrome.join(""); // convert array to string again
      }
   }

   palindrome[palindrome.length - 1] = "b";

   return palindrome.join(""); // convert array to string again
};