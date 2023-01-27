/*
   Given an array of integers temperatures represents the daily temperatures, 
   return an array answer such that 
   answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 

   If there is no future day for which this is possible, keep answer[i] == 0 instead.

   
   Input: temperatures = [73,74,75,71,69,72,76,73]
   Output: [1,1,4,2,1,1,0,0]

   Input: temperatures = [30,40,50,60]
   Output: [1,1,1,0]

   Input: temperatures = [30,60,90]
   Output: [1,1,0]
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function dailyTemperatures(temperatures) {
   let n = temperatures.length;
   let answers = new Array(n).fill(0);
   let stack = [];

   for (let i = 0; i < n; i++) {
      while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
         let [val, index] = stack.pop();
         answers[index] = i - index;
      }

      stack.push([temperatures[i], i]);
   }

   return answers;
};