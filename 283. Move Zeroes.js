/*
   Move all zeros to the right side, while keeping the order of the rest of the elements same.
   Input: nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]

   Input: nums = [0]
   Output: [0]
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function moveZeroes(nums) {
   if (nums.length <= 1) {
      return nums;
   }

   let left = 0;
   let right = 0;

   while (right < nums.length) {
      if (nums[right] != 0) {
         // swap right with left and increment left only if swap is possible
         let temp = nums[left];
         nums[left] = nums[right];
         nums[right] = temp;

         left++;
      }

      right++; // right will always be increased
   }

   return nums;
};