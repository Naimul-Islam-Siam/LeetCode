/*
   Given an array of integers `arr` and two integers `k` and `threshold`,
   return the number of sub-arrays of size `k` and average greater than or equal to `threshold`.

   Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
   Output: 3
   Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 
      5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function numOfSubarrays(arr, k, threshold) {
   let i = 0, sum = 0, count = 0;

   for (let j = 0; j < arr.length; j++) {
      sum = sum + arr[j];

      if (j - i + 1 == k) {
         if (sum / k >= threshold) {
            count++;
         }

         sum = sum - arr[i];

         i++;
      }
   }

   return count;
};