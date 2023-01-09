/*
   Given an integer array nums and an integer k, 
   return the k most frequent elements.
   You may return the answer in any order.

   Example 1:
   Input: nums = [1, 1, 1, 2, 2, 3], k = 2
   Output: [1, 2]
   
   Example 2:
   Input: nums = [1], k = 1
   Output: [1]
 */

/*
   Approach-1: We can use Max Heap
      But that would take O(klogn)

   Approach-2: Bucket Sort
      Bucket sort takes O(n) only if n is defined as finite number;
      if the input array is [1,1,1,2,2,300],
      we will need an extra array of length 301 just for one element 300
   
   Approach3-: Counting Sort
      The following approach
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function topKFrequent(nums, k) {
   let counter = new Map();
   let freqArray = [];

   // count the frequency of each element;
   for (let i = 0; i < nums.length; i++) {
      let currentNum = nums[i];
      if (!counter.has(currentNum)) {
         counter.set(currentNum, 1);
      } else {
         counter.set(currentNum, counter.get(currentNum) + 1);
      }
   }

   // frequency array for counting sort
   for (let [key, value] of counter) {
      if (!freqArray[value]) {
         freqArray[value] = [key];
      } else {
         freqArray[value].push(key);
      }
   }

   let output = [];

   // iterate over the frequency array
   for (let i = freqArray.length - 1; i >= 0; i--) {
      if (!freqArray[i]) {
         continue;
      }

      if (output.length == k) {
         break;
      }

      for (let j in freqArray[i]) {
         output.push(freqArray[i][j]);

         if (output.length == k) {
            break;
         }
      }
   }

   return output;
};