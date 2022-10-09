/*
   Input: n = 4
   Output: 3
   Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

// Runtime: 96 ms, faster than 36.06 % of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.3 MB, less than 61.15 % of JavaScript online submissions for Fibonacci Number.
// time: O(2^n) | space: O(n)

const fib = (n) => {
   if (n === 0) return 0;
   else if (n === 1) return 1;
   else return fib(n - 2) + fib(n - 1);
};


// Runtime: 68 ms, faster than 98.11 % of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.3 MB, less than 78.82 % of JavaScript online submissions for Fibonacci Number.
// time: O(n) | space: O(n)

let cache = { 0: 0, 1: 1 };

const fib = (n) => {
   if (n in cache)
      return cache[n];

   else {
      cache[n] = fib(n - 2) + fib(n - 1);
      return cache[n];
   }
};

// Runtime: 68 ms, faster than 98.11 % of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.6 MB, less than 13.35 % of JavaScript online submissions for Fibonacci Number.
// time: O(n) | space: O(1)

const fib = (n) => {
   let arr = [0, 1];
   let index = 1;

   while (index < n) {
      let nextFib = arr[0] + arr[1];
      arr[0] = arr[1];
      arr[1] = nextFib;

      index++;
   }

   if (n === 0) return arr[0];
   else return arr[1];
};