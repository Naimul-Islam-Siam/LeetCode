// --- Iterative Approach
function addDigits(num) {
   let sum = 0;

   while (num > 9) {
      sum = 0;

      while (num > 0) {
         sum = sum + (num % 10);
         num = Math.floor(num / 10);
      }

      num = sum;
   }

   return num;
};

// --- Recursive Approach ---
function addDigits(num) {
   let sum = 0;

   while (num > 0) {
      sum = sum + (num % 10);
      num = Math.floor(num / 10);
   }

   if (sum > 9) {
      addDigits(sum);
   } else {
      return sum;
   }
};