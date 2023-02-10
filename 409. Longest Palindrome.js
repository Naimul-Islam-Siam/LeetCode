/*
   Letters are case sensitive, for example, 
   "Aa" is not considered a palindrome here.

   Input: s = "abccccdd"
   Output: 7
   Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

   Input: s = "a"
   Output: 1
   Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

// Time Complexity: O(n)
// Space Complexity: O(1); at most 52
function longestPalindrome(s) {
   let counter = new Map();
   let result = 0;

   for (let i = 0; i < s.length; i++) {
      if (!counter.has(s[i])) {
         counter.set(s[i], 1);
      } else {
         counter.set(s[i], counter.get(s[i]) + 1);
      }

      // if a char has even number of occurence this means it can be partnered in a palindrome string
      if (counter.get(s[i]) % 2 == 0) {
         result = result + 2;
      }
   }

   // if s.length is greater than result, that means we can add at most one character as the center of the palindrome string, otherwise if s.length is equal to the result this means all the chars are already partnered
   return s.length > result ? result + 1 : result;
};