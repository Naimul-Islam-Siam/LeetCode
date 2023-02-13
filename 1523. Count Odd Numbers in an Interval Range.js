/*
   Given two non-negative integers low and high. 
   Return the count of odd numbers between low and high (inclusive).

   Input: low = 3, high = 7
   Output: 3
   Explanation: The odd numbers between 3 and 7 are [3,5,7].

   Input: low = 8, high = 10
   Output: 1
   Explanation: The odd numbers between 8 and 10 are [9].
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function countOdds(low, high) {
   let i = low;
   let count = 0;

   while (i <= high) {
      if (i % 2) {
         count++;
         i = i + 2;
      } else {
         i++;
      }
   }

   return count;
};

// Time Complexity: O(1)
// Space Complexity: O(1)
function countOdds(low, high) {
   let diff = high - low;
   let count = 0;

   if (low % 2 == 0 && high % 2 == 0) {
      count = diff / 2;
   } else {
      count = Math.floor(diff / 2) + 1;
   }

   return count;
};