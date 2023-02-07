/*
   Given an array `nums` containing `n` distinct numbers in the range [0, n], 
   return the only number in the range that is missing from the array.

   Input: nums = [3,0,1]
   Output: 2
   Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
      2 is the missing number in the range since it does not appear in nums.

   Input: nums = [0,1]
   Output: 2
   Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
      2 is the missing number in the range since it does not appear in nums.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function missingNumber(nums) {
   let n = nums.length;
   let sum = 0;
   let total = (n * (n + 1)) / 2; // formula

   for (let i = 0; i < n; i++) {
      sum = sum + nums[i];
   }

   return total - sum;
};