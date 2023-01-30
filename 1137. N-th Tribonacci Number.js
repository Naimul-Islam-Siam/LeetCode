/*
   Input: n = 4
   Output: 4
   Explanation:
      T_3 = 0 + 1 + 1 = 2
      T_4 = 1 + 1 + 2 = 4
*/

// Time Complexity: O(n)
// Space Complexity: O(n)

// --- Recursive ---
let memo = [0, 1, 1];

function tribonacci(n) {
   if (memo[n] == undefined) {
      memo[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
   }

   return memo[n];
};

// --- Iterative ---
let cache = [0, 1, 1];

function tribonacci(n) {
   if (cache[n] != undefined) {
      return cache[n];
   }

   for (let i = 3; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
   }

   return cache[n];
};