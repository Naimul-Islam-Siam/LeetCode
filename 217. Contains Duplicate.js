/*
   Given an integer array `nums`, return `true` if any value appears at least twice in the array, 
   and return `false` if every element is distinct.

   Input: nums = [1,2,3,1]
   Output: true

   Input: nums = [1,2,3,4]
   Output: false
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicate(nums) {
   let visited = new Set();

   for (let i = 0; i < nums.length; i++) {
      if (visited.has(nums[i])) {
         return true;
      }

      visited.add(nums[i]);
   }

   return false;
};