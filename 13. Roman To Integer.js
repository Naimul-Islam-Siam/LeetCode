/*
   Input: s = "VI"
   Output: 6

   Input: s = "IV"
   Output: 4

   Input: s = "MCMXCIV"
   Output: 1994
   Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function romanToInt(s) {
   const charMap = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };

   let prevCharValue = 0;
   let sum = 0;

   // backward iteration gives easier idea to determine wheter to subtract or add
   for (let i = s.length - 1; i >= 0; i--) {
      let currentCharValue = charMap[s[i]];

      if (currentCharValue < prevCharValue) {
         sum = sum - currentCharValue;
      } else {
         sum = sum + currentCharValue;
      }

      prevCharValue = currentCharValue;
   }

   return sum;
};