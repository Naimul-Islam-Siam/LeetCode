/*
   A conveyor belt has packages that must be shipped from one port to another within days days.

   The ith package on the conveyor belt has a weight of weights[i]. 
   Each day, we load the ship with packages on the conveyor belt (in the order given by weights). 
   We may not load more weight than the maximum weight capacity of the ship.

   Return the least weight capacity of the ship 
   that will result in all the packages on the conveyor belt being shipped within days days.

   Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
   Output: 15
   Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
   1st day: 1, 2, 3, 4, 5
   2nd day: 6, 7
   3rd day: 8
   4th day: 9
   5th day: 10

   Note that the cargo must be shipped in the order given, 
   so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function shipWithinDays(weights, days) {
   const feasible = (maxCapacity) => {
      let currentLoad = 0, daysNeeded = 1;

      for (let i = 0; i < weights.length; i++) {
         currentLoad = currentLoad + weights[i];

         if (currentLoad > maxCapacity) {
            daysNeeded++;
            currentLoad = weights[i];
         }
      }

      return daysNeeded > days ? false : true;
   }

   let totalWeight = 0, maxWeight = -Infinity;

   for (let i = 0; i < weights.length; i++) {
      totalWeight = totalWeight + weights[i];
      maxWeight = Math.max(maxWeight, weights[i]);
   }

   let left = maxWeight, right = totalWeight;

   // Binary Search
   while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (feasible(mid)) {
         right = mid;
      } else {
         left = mid + 1;
      }
   }

   return left;
};