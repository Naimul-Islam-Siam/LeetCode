/*
   Given an array of integers nums and an integer k, 
   return the total number of subarrays whose sum equals to k.

   A subarray is a contiguous non-empty sequence of elements within an array.

   Input: nums = [1,1,1], k = 2
   Output: 2

   Input: nums = [1,2,3], k = 3
   Output: 2

   https://youtu.be/fFVZt-6sgyo
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function subarraySum(nums, k) {
   let count = 0;
   let n = nums.length;

   for (let i = 0; i < n; i++) {
      let sum = nums[i];

      if (sum == k) {
         count++;
      }

      for (let j = i + 1; j < n; j++) {
         sum = sum + nums[j];

         if (sum == k) {
            count++;
         }
      }
   }

   return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
function subarraySum(nums, k) {
   /*
      we will be using Map instead of set because there can be negative numbers in nums array
      so multiple subarray can produce the same sum value [1] = [1, -1, 1]
      we will initialize with 0 as count value 1 in Map
   */
   let prefixCount = new Map([[0, 1]]); // initialize with 0: 1
   let sum = 0;
   let count = 0;

   for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i]; // prefix sum
      nums[i] = sum;

      if (prefixCount.has(sum - k)) {
         count = count + prefixCount.get(sum - k);
      }

      if (!prefixCount.has(sum)) {
         prefixCount.set(sum, 1);
      } else {
         prefixCount.set(sum, prefixCount.get(sum) + 1);
      }
   }

   return count;
};