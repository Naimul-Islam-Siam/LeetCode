/*
   Input: s = "cbaebabacd", p = "abc"
   Output: [0,6]
   Explanation:
      The substring with start index = 0 is "cba", which is an anagram of "abc".
      The substring with start index = 6 is "bac", which is an anagram of "abc".

   Input: s = "abab", p = "ab"
   Output: [0,1,2]
   Explanation:
      The substring with start index = 0 is "ab", which is an anagram of "ab".
      The substring with start index = 1 is "ba", which is an anagram of "ab".
      The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

// Time Complexity: O(n*k) k is a very small number so => O(n) 
// Space Complexity: O(k)
function findAnagrams(s, p) {
   let output = [];
   let k = p.length;
   let counter = new Map();

   // check whether all the keys of counter has a 0 value
   const checkAllZeroes = () => {
      for (let value of counter.values()) {
         if (value !== 0) {
            return false;
         }
      }

      return true;
   };

   for (let i = 0; i < k; i++) {
      if (!counter.has(p[i])) {
         counter.set(p[i], 1);
      } else {
         counter.set(p[i], counter.get(p[i]) + 1);
      }
   }

   // sliding window
   let i = 0;
   for (let j = 0; j < s.length; j++) {
      // if there's a match, decrease the frequency of j-th element (of window) in counter by 1
      if (counter.has(s[j])) {
         counter.set(s[j], counter.get(s[j]) - 1);
      }

      // only if the current window size == k
      if (j - i + 1 == k) {
         // check whether all the elemnts of the window has a zero value in the counter
         // if true, i is the start index of an anagram
         if (checkAllZeroes()) {
            output.push(i);
         }

         // before i increases, increase the frequency of i-th element (of window) in counter by 1
         // to recompensate the decrease caused by j
         if (counter.has(s[i])) {
            counter.set(s[i], counter.get(s[i]) + 1);
         }

         i++;
      }
   }

   return output;
};