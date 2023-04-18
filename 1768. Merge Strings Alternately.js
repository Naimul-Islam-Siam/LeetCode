/*
   Input: word1 = "abc", word2 = "pqr"
   Output: "apbqcr"
   Explanation: The merged string will be merged as so:
   word1:  a   b   c
   word2:    p   q   r
   merged: a p b q c r

   Input: word1 = "ab", word2 = "pqrs"
   Output: "apbqrs"
   Explanation: Notice that as word2 is longer, "rs" is appended to the end.
   word1:  a   b 
   word2:    p   q   r   s
   merged: a p b q r s

   Input: word1 = "abcd", word2 = "pq"
   Output: "apbqcd"
   Explanation: Notice that as word1 is longer, "cd" is appended to the end.
   word1:  a   b   c   d
   word2:    p   q 
   merged: a p b q c d
*/

// Time Complexity: O(n1 + n2)
// Space Complexity: O(n1 + n2)
function mergeAlternately(word1, word2) {
   let str = "";
   let n1 = word1.length, n2 = word2.length;
   let n = n1 + n2;
   let i = 0, j = 0, k = 0;

   while (i < n) {
      if (i % 2 == 0 && j < n1) {
         str = str + word1[j];
         j++;
      } else if (i % 2 != 0 && k < n2) {
         str = str + word2[k];
         k++;
      }

      i++;
   }

   while (j < n1) {
      str = str + word1[j];
      j++;
   }

   while (k < n2) {
      str = str + word2[k];
      k++;
   }

   return str;
};