/*
   You are given a sorted array consisting of only integers 
   where every element appears exactly twice, 
   except for one element which appears exactly once.

   Return the single element that appears only once.

   Input: nums = [1,1,2,3,3,4,4,8,8]
   Output: 2

   Input: nums = [3,3,7,7,10,11,11]
   Output: 10
*/

// Time Complexity: O(logn)
// Space Complexity: O(1)
function singleNonDuplicate(nums) {
   let left = 0;
   let right = nums.length - 1;

   while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      // The pairs are appearing in such a way that the first element is in even index
      // and second element is in odd index
      // if this is not the case this means there's a difference
      if (mid % 2 == 0) {
         nums[mid + 1] == nums[mid] ? left = mid + 1 : right = mid - 1;
      } else {
         nums[mid - 1] == nums[mid] ? left = mid + 1 : right = mid - 1;
      }
   }

   return nums[left];
};