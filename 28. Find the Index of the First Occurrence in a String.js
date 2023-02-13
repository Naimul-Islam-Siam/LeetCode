/*
   Input: haystack = "sadbutsad", needle = "sad"
   Output: 0
   Explanation: "sad" occurs at index 0 and 6.
   The first occurrence is at index 0, so we return 0.

   Input: haystack = "leetcode", needle = "leeto"
   Output: -1
   Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// Time Complexity: O(nk); n -> haystack.length, k -> needle.length
// Space Complexity: O(1)
function strStr(haystack, needle) {
   let i = 0, k = needle.length;

   if (haystack == needle || needle == "") {
      return 0;
   }

   // Sliding Window
   while (i < haystack.length) {
      if (haystack[i] == needle[0]) {
         for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
               break;
            }

            if (j == k - 1) {
               return i;
            }
         }
      }

      i++;
   }

   return -1;
};