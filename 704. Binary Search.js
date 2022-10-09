/*
   Input: nums = [-1,0,3,5,9,12], 
   target = 9
   Output: 4
   Explanation: 9 exists in nums and its index is 4
*/

function BinarySearch(nums, target) {
   let start = 0;
   let end = nums.length - 1;
   let mid = parseInt((start + end) / 2);

   while (nums[mid] !== target && start <= end) {
      if (target > nums[mid]) {
         start = mid + 1;
      } else if (target < nums[mid]) {
         end = mid - 1;
      }

      mid = parseInt((start + end) / 2)
   }

   if (nums[mid] === target) {
      return mid;
   }

   return -1;
};