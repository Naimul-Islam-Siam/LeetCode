/*
   Given an integer array nums and an integer k, 
   return true if there are two distinct indices i and j in the array 
   such that nums[i] == nums[j] and abs(i - j) <= k.

   Input: nums = [1,2,3,1], k = 3
   Output: true

   Input: nums = [1,0,1,1], k = 1
   Output: true

   Input: nums = [1,2,3,1,2,3], k = 2
   Output: false

   Hash Map: https://youtu.be/B5v3KZpRreQ?list=PLpIkg8OmuX-K6A0sEPFxOSJh4_AjCGAFf
   Sliding Window: https://youtu.be/AyiGBwFlMb8?list=PLpIkg8OmuX-J2Ivo9YdY7bRDstPPTVGvN
*/

// --- Brute Force ---
// Time Complextiy: O(n*m) m -> max length of value of counter.values() 
// Space Complexity: O(n)
function containsNearbyDuplicate(nums, k) {
   let counter = new Map();

   for (let i = 0; i < nums.length; i++) {
      if (!counter.has(nums[i])) {
         counter.set(nums[i], [i]);
      } else {
         counter.set(nums[i], [...counter.get(nums[i]), i]);
      }
   }

   for (const value of counter.values()) {
      if (value.length > 1) {
         for (let i = 1; i < value.length; i++) {
            if (Math.abs(value[i] - value[i - 1]) <= k) {
               return true;
            }
         }
      }
   }

   return false;
};


// --- Hash Map ---
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsNearbyDuplicate(nums, k) {
   let counter = new Map();

   for (let i = 0; i < nums.length; i++) {
      if (!counter.has(nums[i])) {
         counter.set(nums[i], i);
      } else {
         if (Math.abs(i - counter.get(nums[i])) <= k) {
            return true;
         } else {
            counter.set(nums[i], i); // update with latest index, as the previous will create even larger difference when a match is found
         }
      }
   }

   return false;
};


// --- Sliding Window ---
// Time Complexity: O(n)
// Space Complexity: O(k)
function containsNearbyDuplicate(nums, k) {
   let set = new Set();
   let i = 0, j = 0;

   while (j < nums.length) {
      if (Math.abs(j - i) <= k) {
         if (set.has(nums[j])) {
            return true;
         } else {
            set.add(nums[j]);
         }

         j++;
      } else {
         set.delete(nums[i]);
         i++;
         // when there's a shift in window, remove the element of previous window from set, as the element is no longer in window
      }
   }

   return false;
};