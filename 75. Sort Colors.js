/*
   We will use the integers 0, 1, and 2 
   to represent the color red, white, and blue, respectively.

   sort them in-place

   Input: nums = [2,0,2,1,1,0]
   Output: [0,0,1,1,2,2]

   Input: nums = [2,0,1]
   Output: [0,1,2]

   Input: nums = [2,1,2]
   Output: [1,2,2]

   Input: nums = [1,1,1]
   Output: [1,1,1]

   Input: nums = [2]
   Output: [2]
*/

// Time Complexity: O(n)
// Space Complexity: O(1) [counter is of fixed length 3]
function sortColors(nums) {
   let counter = [0, 0, 0];

   for (let i = 0; i < nums.length; i++) {
      counter[nums[i]]++;
   }

   let i = 0, j = 0;
   while (j < 3 && i < nums.length) {
      if (counter[j] == 0) {
         j++;
         continue;
      }

      nums[i] = j;
      counter[j]--;
      i++;
   }
};