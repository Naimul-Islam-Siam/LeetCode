/*
   You want to collect as much fruit as possible. 
   However, the owner has some strict rules that you must follow:

   1. You only have two baskets, and each basket can only hold a single type of fruit. 
      There is no limit on the amount of fruit each basket can hold.
   2. Starting from any tree of your choice, you must pick exactly one fruit from every tree
      (including the start tree) while moving to the right. 
      The picked fruits must fit in one of your baskets.
   3. Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

   Given the integer array fruits, return the maximum number of fruits you can pick.

   Input: fruits = [1,2,1]
   Output: 3
   Explanation: We can pick from all 3 trees.

   Input: fruits = [0,1,2,2]
   Output: 3
   Explanation: We can pick from trees [1,2,2].
      If we had started at the first tree, we would only pick from trees [0,1].

   Input: fruits = [1,2,3,2,2]
   Output: 4
   Explanation: We can pick from trees [2,3,2,2].
      If we had started at the first tree, we would only pick from trees [1,2].

   https://www.youtube.com/watch?v=yYtaV0G3mWQ
*/

// --- Sliding Window ---
// Time Complexity: O(n)
// Space Complexity: O(n)
function totalFruit(fruits) {
   let counter = new Map();
   let i = 0, total = 0, max = 0; // i will work as left pointer

   for (let j = 0; j < fruits.length; j++) {
      // j will work as right pointer

      if (!counter.has(fruits[j])) {
         counter.set(fruits[j], 1);
      } else {
         counter.set(fruits[j], counter.get(fruits[j]) + 1); // increment the count value of fruits[j]
      }

      total++;

      // as we can have 2 baskets at most
      while (counter.size > 2) {
         counter.set(fruits[i], counter.get(fruits[i]) - 1); // decrease the count value of fruits[i] as i (left pointer) will be shifted by 1 to right

         if (counter.get(fruits[i]) == 0) {
            counter.delete(fruits[i]); // remove the fruit from map
         }

         i++; // increment left pointer
         total--; // as fruit count was decreased by 1, total possible should also be decreased by 1
      }

      max = Math.max(max, total);
   }

   return max;
};