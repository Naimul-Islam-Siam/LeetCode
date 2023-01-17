/*
   return the minimal length of a subarray whose sum is **greater than or equal** to target. 
   If there is no such subarray, return 0 instead.

   Input: target = 7, nums = [2,3,1,2,4,3]
   Output: 2
   Explanation: The subarray [4,3] has the minimal length under the problem constraint.

   Input: target = 4, nums = [1,4,4]
   Output: 1

   Input: target = 11, nums = [1,1,1,1,1,1,1,1]
   Output: 0
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function minSubArrayLen(target, nums) {
   let i = 0, j = 0, sum = 0, minLength = Infinity;

   while (j < nums.length) {
      sum = sum + nums[j];

      while (sum >= target) {
         minLength = Math.min(minLength, j - i + 1);
         flag = true;
         sum = sum - nums[i];
         i++;
      }

      j++;
   }

   return minLength == Infinity ? 0 : minLength;
};