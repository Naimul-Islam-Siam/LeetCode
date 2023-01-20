/*
   Input: nums = [4,5,0,-2,-3,1], k = 5
   Output: 7
   Explanation: There are 7 subarrays with a sum divisible by k = 5:
      [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

   https://www.youtube.com/watch?v=7Xeorb721LQ
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function subarraysDivByK(nums, k) {
   let count = 0;

   for (let i = 0; i < nums.length; i++) {
      let sum = 0;

      for (let j = i; j < nums.length; j++) {
         sum = sum + nums[j];

         if (sum % k == 0) {
            count++;
         }
      }
   }

   return count;
};


// Time Complexity: O(n)
// Space Complexity: O(k) number of key will be atmost k
function subarraysDivByK(nums, k) {
   let count = 0, sum = 0, remainder;
   let remainderCounter = new Map();
   remainderCounter.set(0, 1); // as sum % k = 0 initially

   for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
      remainder = sum % k;
      if (remainder < 0) {
         // for negative remainder
         // if sum % 7 = -3, sum % 7 = 4 also [7+(-3)]
         remainder = k + remainder;
      }

      if (!remainderCounter.has(remainder)) {
         remainderCounter.set(remainder, 1);
      } else {
         count = count + remainderCounter.get(remainder);
         remainderCounter.set(remainder, remainderCounter.get(remainder) + 1);
      }

      /*
         logic of this approach is,
            let's sum_i = sum of array till i-th index, sum_j = sum of array till j-th index
            if sum_i % k == sum_j % k, 
            this will mean sum of array from (i+1)th to j-th index will be divisible by k
            or, (sum_j - sum_i) % k == 0. 
            So, we have found one subarray for which sum (of that subarray) is divisible by k
            Thus count = count + remainderCounter[remainder]

         Why count = count + remainderCounter[remainder], instead of count = count + 1 ?
            consider this array:
               [2, 3, 5, 4, 5, 3, 4], k = 7
               [2, 5, 10, 14, 19, 22, 26] // sum in every index
               [2, 5, 3, 0, 5, 1, 5] // sum % k (7)

            - now initially 0 = 1 in hashmap as sum is initially 0 so, 0 % 7 = 0, count of 0 is 1
            
            - 3-th index has remainder 0 in the array, 
               so from initial remainder to 3rd index, sum of the subarray (0 to 3rd index) will be divisible by k
               sum_j = 14 and sum_i = 0. So, (14-0) % 7 = 0
               so according to our program, 
               🔄 count = 0 (count) + 1 (remainderCounter[0]) = 1
               We found one subarray [2, 3, 5, 4] = 14 (sum), 14 % 7 = 0 ✅
               remainderCounter[0] will be = 1 + 1 = 2.
            
            - 1-th and 4-th index has remainder 5
               So, (i+1 or 1+1 = 2th index to 4th index is a valid subarray)
            
               sum_j = 19, sum_i = 5. So, (19-5) % 7 = 0
               new found subarray [5, 4, 5], sum = 14 % 7 = 0 ✅
               🔄 count = count + remainderCounter[5] = 1 + 1 = 2
               remainderCounter[5] will be = 1 (previously 1) + 1 (new addition) = 2.

            - 6-th index has remainder 5
               So, 2nd to 6th index will have a valid subarray
               and 5th to 6th index will have a valid subarray

               sum_j = 26, sum_i = 5 and (26-5) % 7 = 0
               2nd to 6th index -> [5, 4, 5, 3, 4], sum = 21 % 7 = 0 ✅

               sum_j = 26, sum_i = 19 and (26-19) % 7 = 0
               5th to 6th index -> [3, 4], sum = 7 % 7 = 0 ✅

               So, we rightfully found 2 (remainderCounter[5]) new subarray

               🔄 count = count + remainderCounter[5] = 2 + 2 = 4
               and remainderCounter[5] will be 2+1 = 3
      */
   }

   return count;
};