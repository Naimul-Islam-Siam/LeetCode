/*
   Input: num = [1,2,0,0], k = 34
   Output: [1,2,3,4]
   Explanation: 1200 + 34 = 1234

   Input: num = [2,7,4], k = 181
   Output: [4,5,5]
   Explanation: 274 + 181 = 455

   Input: num = [2,1,5], k = 806
   Output: [1,0,2,1]
   Explanation: 215 + 806 = 1021
*/

// Time Complexity: O(max(n, logk))
// Space Complexity: O(max(n, logk))

// better runtime in leetcode
function addToArrayForm(num, k) {
   let result = [];
   let i = num.length - 1, carry = 0, sum = 0;

   while (i >= 0 || k > 0 || carry > 0) {
      sum = 0;

      if (k > 0) {
         let d = k % 10;
         k = Math.floor(k / 10);
         sum = sum + d
      }

      if (i >= 0) {
         sum = sum + num[i];
      }

      sum = sum + carry;

      result.push(sum % 10);

      if (sum > 9) {
         carry = 1;
      } else {
         carry = 0;
      }

      i--;
   }

   return result.reverse();
};

// Better memory in leetcode
function addToArrayForm(num, k) {
   let result = [];
   let i = num.length - 1;

   while (i >= 0 || k > 0) {
      if (i >= 0) {
         k = k + num[i];
      }

      result.push(k % 10);

      k = Math.floor(k / 10);

      i--;
   }

   return result.reverse();
};