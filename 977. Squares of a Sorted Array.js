/*
   Input: nums = [-4, -1, 0, 3, 10]
   Output: [0, 1, 9, 16, 100]
   Explanation: 
      After squaring, the array becomes[16, 1, 0, 9, 100].
      After sorting, it becomes[0, 1, 9, 16, 100].

   Input: nums = [-7, -3, 2, 3, 11]
   Output: [4, 9, 9, 49, 121]
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function sortedSquares(nums) {
   let left = 0, right = nums.length - 1, k = nums.length - 1;
   let result = [];

   while (left <= right) {
      if (Math.abs(nums[right]) > Math.abs(nums[left])) {
         result[k] = nums[right] ** 2;
         right--;
      } else {
         result[k] = nums[left] ** 2;
         left++;
      }

      k--;
   }

   return result;
};