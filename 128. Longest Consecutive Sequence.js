/*
   Input: nums = [100,4,200,1,3,2]
   Output: 4
   Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
      Therefore its length is 4.

   Input: nums = [0,3,7,2,5,8,4,6,0,1]
   Output: 9

   Input: nums = [1,0,2,1]
   Output: 3
   Explanation: The longest consecutive elements sequence is [0, 1, 2]. 
      Therefore its length is 3. 
      (Even though 1 appears twice, but appears in the middle of the sequence. So skip that)
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function longestConsecutive(nums) {
   if (nums.length <= 1) {
      return nums.length;
   }

   const numbers = new Set(nums); // set has constant time access like map
   let longest = 0;

   for (let i = 0; i < nums.length; i++) {
      if (!numbers.has(nums[i] - 1)) {
         let length = 0;
         while (numbers.has(nums[i] + length)) {
            length++;
         }

         if (length > longest) longest = length;
      }
   }

   return longest;
};

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function longestConsecutive(nums) {
   if (nums.length <= 1) {
      return nums.length;
   }

   nums = nums.sort((a, b) => a - b);
   let count = 1, max = 1;

   for (let i = 1; i < nums.length; i++) {
      // if same numbers appear consecutively while being in the middle of a sequence (not at the start),
      // skip that and keep the sequence going. (not mentioned in question but otherwise code doesn't work)
      if (nums[i] == nums[i - 1]) continue;

      if (nums[i] - nums[i - 1] == 1) {
         count++;
      } else {
         if (count > max) {
            max = count;
         }

         count = 1;
      }
   }

   if (count > max) {
      max = count;
   }

   return max;
};