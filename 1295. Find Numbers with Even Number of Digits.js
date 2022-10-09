/*
   Input: nums = [12,345,2,6,7896]
   Output: 2
   Explanation: 
   12 contains 2 digits (even number of digits). 
   345 contains 3 digits (odd number of digits). 
   2 contains 1 digit (odd number of digits). 
   6 contains 1 digit (odd number of digits). 
   7896 contains 4 digits (even number of digits). 
   
   Therefore only 12 and 7896 contain an even number of digits.
*/

function findTotalEvenNumbers(nums) {
   let numberOfDigits;
   let count = 0;

   for (let i = 0; i < nums.length; i++) {
      numberOfDigits = findDigitLength(nums[i]);
      if (numberOfDigits % 2 == 0) count++;
   }

   return count;
};

function findDigitLength(num) {
   if (num == 0) return 1;

   let count = 0;

   while (num > 0) {
      num = parseInt(num / 10);
      count++;
   }

   return count;
}

// faster as there's no while loop per number
function findDigitLength(num) {
   if (num < 0) num = num * -1; // convert a negative number to positive first

   return parseInt(Math.log10(num)) + 1;
}