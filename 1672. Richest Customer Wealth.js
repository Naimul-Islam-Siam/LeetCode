/*
   Input: accounts = [[1, 2, 3], [3, 2, 1]]
   Output: 6
   Explanation:
   1st customer has wealth = 1 + 2 + 3 = 6
   2nd customer has wealth = 3 + 2 + 1 = 6
   Both customers are considered the richest with a wealth of 6 each, so return 6.

   Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
   Output: 17
*/

function maximumWealth(accounts) {
   let maxSum = 0;
   for (let person = 0; person < accounts.length; person++) {
      let sum = 0;
      for (let accountNo = 0; accountNo < accounts[person].length; accountNo++) {
         sum = sum + accounts[person][accountNo];
      }

      if (sum > maxSum) {
         maxSum = sum;
      }
   }

   return maxSum;
};