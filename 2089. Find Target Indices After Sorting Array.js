/*
   Input: nums = [1,2,5,2,3], target = 2
   Output: [1,2]
   Explanation: 
      After sorting, nums is [1,2,2,3,5].
      The indices where nums[i] == 2 are 1 and 2.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function targetIndices(nums, target) {
   let lessThanTarget = 0; // will count how many numbers are less than target in nums array
   let greaterThanTarget = 0; // will count how many numbers are greater than target in nums array
   let result = [];

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
         lessThanTarget++;
      } else if (nums[i] > target) {
         greaterThanTarget++;
      }
   }

   /*
      Let's say
      lessThanTarget = 3;
      greaterThanTarget = 4;

      let's say our target is `t`
      if numbers that are lesser than `t` are denoted using `l`
      and numbers that are greater than `t` are denoted using `g`

      the sorted order will be:
      l, l, l, t, g, g, g, g

      if we have multiple `t` (let's say 3), then:
      Numbers: l, l, l, t, t, t, g, g, g, g
      Index:   0, 1, 2, 3, 4, 5, 6, 7, 8, 9

      Here, lessThanTarget = 3, greaterThanTarget = 4, length of nums = 10
      So, if we run a loop from lessThanTarget(3) to length-1-greaterThanTarget(10-1-4 = 5),
      we get 3, 4, 5 which will be our answer
   */

   for (let i = lessThanTarget; i < nums.length - greaterThanTarget; i++) {
      result.push(i);
   }

   return result;
};