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