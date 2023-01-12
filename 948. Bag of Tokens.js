/*
   Your goal is to maximize your total score by potentially playing each token in one of two ways:

      If your current power is at least tokens[i], you may play the ith token face up, losing tokens[i] power and gaining 1 score.
      If your current score is at least 1, you may play the ith token face down, gaining tokens[i] power and losing 1 score.
   
   Each token may be played at most once and in any order. You do not have to play all the tokens.
   Return the largest possible score you can achieve after playing any number of tokens.

   Input: tokens = [100,200,300,400], power = 200
   Output: 2
   Explanation: Play the tokens in this order to get a score of 2:
      1. Play the 0th token (100) face up, your power becomes 100 and score becomes 1.
      2. Play the 3rd token (400) face down, your power becomes 500 and score becomes 0.
      3. Play the 1st token (200) face up, your power becomes 300 and score becomes 1.
      4. Play the 2nd token (300) face up, your power becomes 0 and score becomes 2.

   https://www.youtube.com/watch?v=LCx1WzlYgvw&list=PLpIkg8OmuX-J8_n8Vy9P9I3KvyDcPMzRU
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function bagOfTokensScore(tokens, power) {
   tokens.sort((a, b) => a - b);

   let i = 0, j = tokens.length - 1;
   let score = 0, maxScore = 0;

   // don't use for loop
   while (i <= j) {
      if (tokens[i] <= power) {
         power = power - tokens[i];
         score++;
         i++;
         maxScore = Math.max(score, maxScore);
      } else if (score > 0) {
         power = power + tokens[j];
         j--;
         score--;
      } else {
         return maxScore;
      }
   }

   return maxScore;
};