/*
   Input: num = 1994
   Output: "MCMXCIV"
   Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

   Some Rules:
   I can be placed before V (5) and X (10) to make 4 and 9. 
   X can be placed before L (50) and C (100) to make 40 and 90. 
   C can be placed before D (500) and M (1000) to make 400 and 900.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function intToRoman(num) {
   let output = "";
   // lookup character map is to be modified considering the additional rules
   const charMap = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };

   for (const key in charMap) {
      if (num == 0) {
         break;
      }

      if (num >= charMap[key]) {
         let quotient = Math.floor(num / charMap[key]);

         for (let i = 0; i < quotient; i++) {
            output = output + key; // including new Roman character to the Roman number string
         }

         num = num - (charMap[key] * quotient);
      }
   }

   return output; // Roman Integer
};