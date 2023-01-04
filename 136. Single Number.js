/*
   Given a non-empty array of integers nums, every element appears twice except for one. 
   Find that single one.
   You must implement a solution with a linear runtime complexity 
   and use only constant extra space.

   Example 1:
   Input: nums = [2,2,1]
   Output: 1

   Example 2:
   Input: nums = [4,1,2,1,2]
   Output: 4

   Example 3:
   Input: nums = [1]
   Output: 1
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function singleNumber(nums) {
   let map = new Map();

   for (let i = 0; i < nums.length; i++) {
      let currentDigit = nums[i];
      if (!map.has(currentDigit)) {
         map.set(currentDigit, 1);
      } else {
         let currentFrequency = map.get(currentDigit);
         map.set(currentDigit, currentFrequency + 1);
      }
   }

   for (let key of map.keys()) {
      if (map.get(key) == 1) {
         return key;
      }
   }
};


// Time Complexity: O(n)
// Space Complexity: O(1)
function singleNumber(nums) {
   let result = 0;

   for (let i = 0; i < nums.length; i++) {
      result = result ^ nums[i]; // XOR operation

      // a XOR 0 = a;
      // a XOR a = 0;
   }

   return result;
};