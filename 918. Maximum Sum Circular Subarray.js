/*
   return the maximum possible sum of a non-empty subarray of nums
   consider circular subarrays too (in that case one index can be used once only)

   Input: nums = [1,-2,3,-2]
   Output: 3
   Explanation: Subarray [3] has maximum sum 3.

   Input: nums = [5,-3,5]
   Output: 10
   Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

   Input: nums = [-3,-2,-3]
   Output: -2
   Explanation: Subarray [-2] has maximum sum -2.
*/

// --- Very Tricky ---

// --- Brute Force ---
// Time Complexity: O(n^2)
// Space Complexity: O(1)
const rotate = (arr) => {
   const end = arr[0];

   for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
   }

   arr[arr.length - 1] = end;
};

const kadane = (arr) => {
   let sum = 0, maxSum = arr[0];

   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]; // step-1
      maxSum = Math.max(sum, maxSum); // step-2
      // step-3
      if (sum < 0) {
         sum = 0;
      }
   }

   return maxSum;
}

function maxSubarraySumCircular(nums) {
   if (nums.length == 1) {
      return nums[0];
   }

   let maxSum = -Infinity;

   for (let i = 0; i < nums.length - 1; i++) {
      rotate(nums);
      let sum = kadane(nums);
      maxSum = Math.max(sum, maxSum);
   }

   return maxSum;
};


// --- Optimal ---
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubarraySumCircular(nums) {
   if (nums.length == 1) {
      return nums[0];
   }

   let sum = arrSum(nums);
   let [maxSum, minSum] = kadanes(nums);
   let circularSum = sum - minSum; // formula

   return maxSum > 0 ? Math.max(maxSum, circularSum) : maxSum;
};

const arrSum = (arr) => {
   let sum = arr[0];

   for (let i = 1; i < arr.length; i++) {
      sum = sum + arr[i];
   }

   return sum;
};

const kadanes = (arr) => {
   let sum_max = arr[0], maxSum = arr[0], sum_min = arr[0], minSum = arr[0];

   for (let i = 1; i < arr.length; i++) {
      sum_max = Math.max(sum_max + arr[i], arr[i]);
      sum_min = Math.min(sum_min + arr[i], arr[i]);

      maxSum = Math.max(sum_max, maxSum);
      minSum = Math.min(sum_min, minSum);
   }

   return [maxSum, minSum];
};