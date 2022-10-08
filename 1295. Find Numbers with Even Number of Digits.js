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