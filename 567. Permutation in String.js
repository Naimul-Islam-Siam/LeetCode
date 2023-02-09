/*
   Input: s1 = "ab", s2 = "eidbaooo"
   Output: true
   Explanation: s2 contains one permutation of s1 ("ba").

   Input: s1 = "ab", s2 = "eidboaoo"
   Output: false
*/

// Time Complexity: O(n); n -> s2.length
// Space Complexity: O(k); k -> s1.length (at a time the window size is k, so k elemnets are stored at most)
function checkInclusion(s1, s2) {
   let k = s1.length;
   let s1Count = new Map();
   let s2Count = new Map();

   for (let i = 0; i < k; i++) {
      if (!s1Count.has(s1[i])) {
         s1Count.set(s1[i], 1);
      } else {
         s1Count.set(s1[i], s1Count.get(s1[i]) + 1);
      }
   }

   // sliding window
   let i = 0, j = 0;

   while (j < s2.length) {
      if (!s2Count.has(s2[j])) {
         s2Count.set(s2[j], 1);
      } else {
         s2Count.set(s2[j], s2Count.get(s2[j]) + 1);
      }

      if (j - i + 1 == k) {
         if (mapsAreEqual(s1Count, s2Count)) {
            return true;
         } else {
            s2Count.set(s2[i], s2Count.get(s2[i]) - 1);

            if (s2Count.get(s2[i]) == 0) {
               s2Count.delete(s2[i]);
            }

            i++;
         }
      }

      j++;
   }

   return false;
};

const mapsAreEqual = (m1, m2) => m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));