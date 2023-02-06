/*
   Given the array nums consisting of `2n` elements 
   in the form [x1,x2,...,xn,y1,y2,...,yn].

   Return the array in the form [x1,y1,x2,y2,...,xn,yn].

   Input: nums = [2,5,1,3,4,7], n = 3
   Output: [2,3,5,4,1,7] 
   Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
   Example 2:

   Input: nums = [1,2,3,4,4,3,2,1], n = 4
   Output: [1,4,2,3,3,2,4,1]

   https://youtu.be/IvIKD_EU8BY
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function shuffle(nums, n) {
   let left = 0;
   let right = n;
   let shuffledArray = [];

   while (left < n) {
      shuffledArray.push(nums[left]);
      shuffledArray.push(nums[right]);

      left++;
      right++;
   }

   return shuffledArray;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
// Constraint: 1 <= nums[i] <= 1000
function shuffle(nums, n) {
   for (let i = 0; i < n; i++) {
      nums[i] = nums[i] << 10; // shift nums[i] to left by 10 bits
      nums[i] = nums[i] | nums[i + n]; // or operation with nums[i+n]
   }

   let j = nums.length - 1;

   for (let i = n - 1; i >= 0; i--) {
      let y = nums[i] & 1023; // 1023 = 2^10 - 1
      let x = nums[i] >> 10; // right shift by 10 bits

      nums[j] = y;
      nums[j - 1] = x;

      j = j - 2; // -2 because we are assigning y and x both
   }

   return nums;
};