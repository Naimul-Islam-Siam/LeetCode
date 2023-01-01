/*
   Input: n = 19
   Output: true
      Explanation:
      1^2 + 9^2 = 82
      8^2 + 2^2 = 68
      6^2 + 8^2 = 100
      1^2 + 0^2 + 0^2 = 1

   Input: n = 2
   Output: false
*/

// Time Complexity: O(nlogm)
// Space Complexity: O(n) ; can be improved using linked list cycle
function isHappy(num) {
   let visit = new Set();

   while (!visit.has(num)) {
      visit.add(num);
      num = squareOfDigits(num);

      if (num === 1) return true;
   }

   return false;
};

function squareOfDigits(num) {
   let sum = 0;

   while (num) {
      let digit = num % 10;
      digit = digit ** 2;
      sum = sum + digit;

      num = Math.floor(num / 10);
   }

   return sum;
};