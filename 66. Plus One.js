/*
   Input: digits = [1,2,3]
   Output: [1,2,4]

   Input: digits = [9]
   Output: [1,0]
*/

function plusOne(digits) {
   for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] = digits[i] + 1;

      if (digits[i] > 9) {
         digits[i] = 0;
      } else {
         return digits;
      }
   }

   digits.unshift(1)

   return digits;
};