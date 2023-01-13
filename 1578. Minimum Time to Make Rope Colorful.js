/*
   Alice wants the rope to be colorful. 
   She does not want two consecutive balloons to be of the same color

   Return the minimum time Bob needs to make the rope colorful.

   Ex: aaaba; out of first 3 a, 2 must be removed because even if the middle one is removed
      (considering the middle has the minimum needed time)
      then 1st and 3rd will be neighbor again

   
   Input: colors = "abaac", 
         neededTime = [1,2,3,4,5]
   Output: 3
   Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
      Bob can remove the blue balloon at index 2. This takes 3 seconds.
      There are no longer two consecutive balloons of the same color. Total time = 3.
*/


// Time Complexity: O(n)
// Space Complexity: O(1)
function minCost(colors, neededTime) {
   /*
       sumOfTime = total needed time of consecutive same colored ballons
       maxTime = maximum needed time for consecutive same colored ballons
       output = minimum total time required to make the rope colorful
    */
   let sumOfTime = neededTime[0], maxTime = neededTime[0];
   let output = 0;

   for (let i = 1; i < colors.length; i++) {
      let current = i, previous = i - 1;

      if (colors[current] == colors[previous]) {
         maxTime = Math.max(neededTime[current], maxTime);
         sumOfTime = sumOfTime + neededTime[current];

         // if current color is the last color and it matches with its previous color
         if (current == colors.length - 1) {
            sumOfTime = sumOfTime - maxTime;
            output = output + sumOfTime;
         }
      } else {
         sumOfTime = sumOfTime - maxTime;
         output = output + sumOfTime;

         maxTime = neededTime[current];
         sumOfTime = neededTime[current];
      }
   }

   return output;
};

// Shorter
function minCost(colors, neededTime) {
   let time = 0, maxTime = 0, currentTime;

   for (let i = 0; i < colors.length; i++) {
      if (i > 0 && colors[i] !== colors[i - 1]) {
         maxTime = 0;
      }

      currentTime = neededTime[i];
      time = time + Math.min(currentTime, maxTime);
      maxTime = Math.max(currentTime, maxTime);
   }

   return time;
};