/*
   Input: nums = [3,2,3]
   Output: 3

   Input: nums = [2,2,1,1,1,2,2]
   Output: 2
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function majorityElement(nums) {
   let counter = new Map();

   for (let i = 0; i < nums.length; i++) {
      if (!counter.has(nums[i])) {
         counter.set(nums[i], 1);
      } else {
         counter.set(nums[i], counter.get(nums[i]) + 1);
      }
   }

   let max = 0, el;
   for (const [key, value] of counter) {
      if (value > max) {
         max = value;
         el = key;
      }
   }

   return el;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
function majorityElement(nums) {
   let majorElement = nums[0];
   let count = 1;

   for (let i = 1; i < nums.length; i++) {
      if (count == 0) {
         count++;
         majorElement = nums[i];
      } else if (nums[i] == majorElement) {
         count++;
      } else {
         count--;
      }
   }

   return majorElement;
};