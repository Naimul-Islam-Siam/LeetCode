/*
   Given two strings `s` and `t`, return true if `s` is a subsequence of `t`, or false otherwise.

   A subsequence of a string is a new string 
   that is formed from the original string by deleting some (can be none) of the characters 
   without disturbing the relative positions of the remaining characters. 
   (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

   Input: s = "abc", t = "ahbgdc"
   Output: true

   Input: s = "axc", t = "ahbgdc"
   Output: false
*/

// Time Complexity: O(n); n -> t.length
// Space Complexity: O(1)
function isSubsequence(s, t) {
   let i = 0, j = 0;

   while (i < t.length && j < s.length) {
      if (t[i] == s[j]) {
         j++;
      }

      i++;
   }

   if (j == s.length) {
      return true;
   }

   return false;
};