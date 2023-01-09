/*
   Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, 
   return the maximum number of points that lie on the same straight line.

   Input: points = [[1,1],[2,2],[3,3]]
   Output: 3

   Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
   Output: 4
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n)
function maxPoints(points) {
   if (points.length <= 1) {
      return points.length;
   }

   let x1, y1, x2, y2, slope;
   let max = 0;


   for (let i = 0; i < points.length - 1; i++) {
      // counter hashmap keeps track of how many points are on the same slope
      // re-initialized after each i-th iteration
      let counter = new Map();

      for (let j = i + 1; j < points.length; j++) {
         x1 = points[i][0];
         y1 = points[i][1];
         x2 = points[j][0];
         y2 = points[j][1];

         if (x1 === x2) {
            slope = Infinity; // otherwise JavaScript generates two distinct result one is Infinity another is -Infinity.
         } else {
            slope = (y2 - y1) / (x2 - x1); // formula
         }

         if (!counter.has(slope)) {
            // as slope doesn't exist yet on the map as a key, two points (points[i], points[j]) should be considered on the same line. So increment is 2
            counter.set(slope, 2);
         } else {
            // as slope already exists on the map as a key, points[i] is already included. So, increment should be 1 not 2.
            counter.set(slope, counter.get(slope) + 1);
         }
      }

      // after each i-th point the max value is rechecked
      for (let value of counter.values()) {
         if (value > max) {
            max = value;
         }
      }

   }

   return max;
};