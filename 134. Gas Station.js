/*
   Given two integer arrays gas and cost, 
   return the starting gas station's index if you can travel around the circuit once in the clockwise direction, 
   otherwise return -1. 
   If there exists a solution, it is guaranteed to be unique

   Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
   Output: 3
   Explanation:
      Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
      Travel to station 4. Your tank = 4 - 1 + 5 = 8
      Travel to station 0. Your tank = 8 - 2 + 1 = 7
      Travel to station 1. Your tank = 7 - 3 + 2 = 6
      Travel to station 2. Your tank = 6 - 4 + 3 = 5
      Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
      Therefore, return 3 as the starting index.
*/

// ---- Very Tricky ----
// Time Complexity: O(n)
// Space Complexity: O(1)
function canCompleteCircuit(gas, cost) {
   let gasSum = 0, costSum = 0, tank = 0, start = 0;
   let n = gas.length;

   for (let i = 0; i < n; i++) {
      gasSum = gasSum + gas[i];
      costSum = costSum + cost[i];
   }

   // if total possible gas is less than total possible cost then no way the round trip is possible
   if (gasSum < costSum) {
      return -1;
   }

   // otherwise a solution is guranteed (according to question)

   for (let i = 0; i < n; i++) {
      tank = tank + gas[i] - cost[i];

      // if overall tank (sum) is negative, no way starting from that index we can reach the next station
      // so assume the next index to be the start and reset tank (sum)
      // if somewhere along the way the tank becomes negative again, the assumed was not the correct solution so again we will assume the next index to be the desired start
      if (tank < 0) {
         start = i + 1;
         tank = 0;
      }
   }

   return start;
};