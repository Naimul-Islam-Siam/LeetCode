/*
   Input: a = "11", b = "1"
   Output: "100"

   Input: a = "1010", b = "1011"
   Output: "10101"
*/

// Time Complexity: O(max(n, m)) n -> a.length, m -> b.length
// Space Complexity: O(max(n, m))
function addBinary(a, b) {
   let i = a.length - 1;
   let j = b.length - 1;
   let result = "";
   let sum = 0, carry = 0;

   while (i >= 0 || j >= 0 || carry > 0) {
      sum = 0;

      if (i >= 0) {
         sum = sum + parseInt(a[i]);
      }

      if (j >= 0) {
         sum = sum + parseInt(b[j]);
      }

      sum = sum + carry;

      if (sum > 1) {
         if (sum == 2) {
            sum = 0;
            carry = 1;
         } else if (sum == 3) {
            sum = 1;
            carry = 1;
         }
      } else {
         carry = 0;
      }

      result = result + sum.toString();

      i--;
      j--;
   }

   return result.split("").reverse().join("");
};