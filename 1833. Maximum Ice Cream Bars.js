/*
   Return the maximum number of ice cream bars the boy can buy with coins coins.

   Input: costs = [1,3,2,4,1], coins = 7
   Output: 4
   Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.

   Input: costs = [10,6,8,7,7,8], coins = 5
   Output: 0
   Explanation: The boy cannot afford any of the ice cream bars.

   Input: costs = [1,6,3,1,2,5], coins = 20
   Output: 6
   Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
// Beats 99.48% runtime and 100% memory
function maxIceCream(costs, coins) {
   const max = Math.max(...costs);
   let costFreq = Array(max + 1).fill(0);
   let count = 0;

   // counting sort
   for (let i = 0; i < costs.length; i++) {
      costFreq[costs[i]]++;
   }

   let i = 0;
   while (i <= max) {
      // as the costFreq is sorted, no point of iterating if i > coins
      if (i > coins) return count;

      // means there's atleast one cost is costs array that is of the same value of i
      if (costFreq[i] !== 0) {
         coins = coins - i;
         costFreq[i]--; // decrease the frequency
         count++;
      }

      // only if there is no cost (that's availble in costs) as i-value is left in the costFreq
      // or there was never a cost (that's availble in costs) similart to i-value in the first place
      if (costFreq[i] === 0) {
         i++;
      }
   }

   return count;
};


// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function maxIceCream(costs, coins) {
   costs = costs.sort((a, b) => a - b);

   let count = 0;

   for (let i = 0; i < costs.length; i++) {
      if (costs[i] > coins) {
         return count;
      } else if (costs[i] <= coins) {
         count++;
         coins = coins - costs[i];
      }
   }

   return count;
};