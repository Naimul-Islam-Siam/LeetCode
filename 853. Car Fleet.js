/*
   There are `n` cars going to the same destination along a one-lane road.
   The destination is `target` miles away.

   A car can never pass another car ahead of it, 
   but it can catch up to it and drive bumper to bumper at the same speed. 
   The faster car will slow down to match the slower car's speed.

   A car fleet is some non-empty set of cars driving at the same position and same speed. 
   Note that a single car is also a car fleet.

   If a car catches up to a car fleet right at the destination point, 
   it will still be considered as one car fleet.

   Return the number of car fleets that will arrive at the destination.


   Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
   Output: 3
   Explanation:
      The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
      The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
      The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
      Note that no other cars meet these fleets before the destination, so the answer is 3.

   Input: target = 100, position = [0,2,4], speed = [4,2,1]
   Output: 1
   Explanation:
      The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
      Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

   
   https://www.youtube.com/watch?v=Pr6T-3yB9RM
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
function carFleet(target, position, speed) {
   let positionSpeed = [];

   for (let i = 0; i < position.length; i++) {
      positionSpeed[i] = [position[i], speed[i]];
   }

   positionSpeed.sort((a, b) => b[0] - a[0]); // sort according to position in decreasing order

   let stack = [];

   for (let i = 0; i < positionSpeed.length; i++) {
      let timeRequiredToFinish = (target - positionSpeed[i][0]) / positionSpeed[i][1];
      stack.push(timeRequiredToFinish);

      if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
         /* 
            if the top of the stack is less than or equal to its previous element in the stack, 
            they will collide at one point in the track
            which means they will be fleet, so remove the speedy one from the stack
         */
         stack.pop();
      }
   }

   return stack.length;
};