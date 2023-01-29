/*
   There are n piles of bananas, the ith pile has piles[i] bananas. 
   The guards have gone and will come back in `h` hours.

   Koko can decide her bananas-per-hour eating speed of `k`. 
   Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
   If the pile has less than k bananas, she eats all of them instead 
   and will not eat any more bananas during this hour.

   Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

   length(piles) <= h (Otherwise its not possible to finish all the bananas in h time)

   Input: piles = [3,6,7,11], h = 8
   Output: 4

   Input: piles = [30,11,23,4,20], h = 5
   Output: 30

   Input: piles = [30,11,23,4,20], h = 6
   Output: 23
*/

// Time Complexity: O(nlogp) p -> max(piles)
// Space Complexity: O(1)
function minEatingSpeed(piles, h) {
   let left = 1; // minimum 1 banana should be eaten per hour, otherwise no progress
   let right = Math.max(...piles); // at max, max(piles) bananas are required to be eaten per hour
   let mid = Math.floor((left + right) / 2); // mid will be the speed of eating
   let k = Infinity;

   // Binary Search
   while (left <= right) {
      let sum = 0; // sum is the total time required to finish all bananas at speed of mid

      for (let i = 0; i < piles.length; i++) {
         sum = sum + Math.ceil(piles[i] / mid);
      }

      if (sum <= h) {
         k = Math.min(k, mid);
         right = mid - 1;
         mid = Math.floor((left + right) / 2);
      } else {
         left = mid + 1;
         mid = Math.floor((left + right) / 2);
      }
   }

   return k;
};