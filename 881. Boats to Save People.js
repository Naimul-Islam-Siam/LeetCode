/*
   Each boat carries at most two people at the same time
   infinite number of boats
   Return the minimum number of boats to carry every given person.

   Example 1:
   Input: people = [1,2], limit = 3
   Output: 1
   Explanation: 1 boat (1, 2)

   Example 2:
   Input: people = [3,2,2,1], limit = 3
   Output: 3
   Explanation: 3 boats (1, 2), (2) and (3)

   Example 3:
   Input: people = [3,5,3,4], limit = 5
   Output: 4
   Explanation: 4 boats (3), (3), (4), (5)
*/

// count sum and divide won't work cause human weight can't be divided into peices.
// let's say [3,5,3,4], limit = 5. Sum = 15/limit = 3. But required boat is 4. because 3+3 > 5, 3+4 > 5
// we can't cut weight 3 to 2


// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function numRescueBoats(people, limit) {
   // First reduce the heaviest possible and be tension free
   people = people.sort((a, b) => a - b);

   let i = 0, j = people.length - 1;
   let boatCount = 0;

   while (i <= j) {
      if (people[i] + people[j] <= limit) {
         i++;
      }

      boatCount++
      j--;
   }

   return boatCount;
};