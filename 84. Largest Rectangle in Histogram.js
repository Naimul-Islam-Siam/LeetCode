/*
   Input: heights = [2,1,5,6,2,3]
   Output: 10
   Explanation: The above is a histogram where width of each bar is 1.
      The largest rectangle is shown in the red area, which has an area = 10 units.

   https://youtu.be/zx5Sw9130L0
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function largestRectangleArea(heights) {
   let stack = [];
   let maxArea = 0;

   for (let i = 0; i < heights.length; i++) {
      let currentHeight = heights[i];

      if (stack.length == 0 || currentHeight >= stack[stack.length - 1][1]) {
         stack.push([i, currentHeight]);
      } else {
         let index, h;

         while (stack.length > 0 && stack[stack.length - 1][1] > currentHeight) {
            [index, h] = stack.pop();
            let area = h * (i - index);
            maxArea = Math.max(area, maxArea);
         }

         stack.push([index, currentHeight]);
      }
   }

   while (stack.length != 0) {
      let [index, h] = stack.pop();
      let area = h * (heights.length - index);
      maxArea = Math.max(area, maxArea);
   }

   return maxArea;
};