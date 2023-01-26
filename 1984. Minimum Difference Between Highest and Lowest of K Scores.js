/*
   Pick the scores of any k students from the array so that 
   the difference between the highest and the lowest of the k scores is minimized.

   Return the minimum possible difference.

   Input: nums = [9,4,1,7], k = 2
   Output: 2
   Explanation: There are six ways to pick score(s) of two students:
   - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
   - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
   - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
   - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
   - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
   - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
   The minimum possible difference is 2.

   Input: nums = [90], k = 1
   Output: 0
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function minimumDifference(nums, k) {
   nums = nums.sort((a, b) => a - b);
   let min = Infinity;
   let i = 0;

   // Sliding Window
   for (let j = 0; j < nums.length; j++) {
      if (j + 1 - i == k) {
         min = Math.min(min, nums[j] - nums[i]);
         i++;
      }
   }

   return min;
};