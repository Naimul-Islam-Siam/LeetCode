/*
   Input: nums = [1,7,3,6,5,6]
   Output: 3
   Explanation:
      The pivot index is 3.
      Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
      Right sum = nums[4] + nums[5] = 5 + 6 = 11

   Input: nums = [1,2,3]
   Output: -1
   Explanation:
      There is no index that satisfies the conditions in the problem statement.

   Input: nums = [2,1,-1]
   Output: 0
   Explanation:
      The pivot index is 0.
      Left sum = 0 (no elements to the left of index 0)
      Right sum = nums[1] + nums[2] = 1 + -1 = 0
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function pivotIndex(nums) {
   let sum = 0;

   for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
   }

   let leftSum = 0, rightSum;

   for (let i = 0; i < nums.length; i++) {
      rightSum = sum - leftSum - nums[i];

      if (leftSum == rightSum) {
         return i;
      }

      leftSum = leftSum + nums[i];
   }

   return -1;
};