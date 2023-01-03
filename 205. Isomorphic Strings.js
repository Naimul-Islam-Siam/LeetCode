/*
   Given two strings `s` and `t`, determine if they are isomorphic.
   Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.
   All occurrences of a character must be replaced with another character while preserving the order of characters. 
   No two characters may map to the same character, but a character may map to itself.
   
   Example 1:
   Input: s = "egg", t = "add"
   Output: true
   
   Example 2:
   Input: s = "foo", t = "bar"
   Output: false
   
   Example 3:
   Input: s = "paper", t = "title"
   Output: true
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function isIsomorphic(s, t) {
   if (s.length !== t.length) {
      return false;
   }

   let charMap = new Map();
   let allocationMap = new Map();

   for (let i = 0; i < s.length; i++) {
      let char1 = s[i];
      let char2 = t[i];

      if (charMap.has(char1) && charMap.get(char1) !== char2) {
         return false;
      } else if (!charMap.has(char1) && allocationMap.has(char2)) {
         return false;
      } else if (!charMap.has(char1) && !allocationMap.has(char2)) {
         charMap.set(char1, char2);
         allocationMap.set(char2, true);
      }
   }

   return true;
};