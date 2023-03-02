/*
   Input: candies = [2,3,5,1,3], extraCandies = 3
   Output: [true,true,true,false,true] 
   Explanation: If you give all extraCandies to:
   - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
   - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
   - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
   - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
   - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/

// Time Complexity: O(n)
// Space Complexity: O(n) with output otherwise O(1)
function kidsWithCandies(candies, extraCandies) {
   let max = -Infinity;
   const n = candies.length;
   let result = [];

   for (let i = 0; i < n; i++) {
      max = Math.max(candies[i], max);
   }

   for (let i = 0; i < n; i++) {
      if (candies[i] + extraCandies < max) {
         result.push(false);
      } else {
         result.push(true);
      }
   }

   return result;
};