/*
   Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
   Output: 6
   Explanation: The subarray [4,-1,2,1] has the largest sum 6.

   Input: nums = [1]
   Output: 1
   Explanation: The subarray [1] has the largest sum 1.

   Input: nums = [5,4,-1,7,8]
   Output: 23
   Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

// Kadanes' Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubArray(nums) {
   let sum = 0, maxSum = nums[0];

   for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i]; // step-1
      maxSum = Math.max(sum, maxSum); // step-2
      // step-3
      if (sum < 0) {
         sum = 0;
      }
   }

   return maxSum;
};