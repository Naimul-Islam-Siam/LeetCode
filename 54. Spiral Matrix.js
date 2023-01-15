/*
   Given an m x n matrix, return all elements of the matrix in spiral order.

   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [1,2,3,6,9,8,7,4,5]

   Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
   Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// Time Complexity: O(n*m)
// Space Complexity: O(1)
function spiralOrder(matrix) {
   let top = 0; // row wise iteration
   let left = 0; // column wise iteration
   let bottom = matrix.length - 1; // row wise iteration
   let right = matrix[0].length - 1; // column wise iteration
   let direction = 0; // will determine which way to traverse
   let output = []; // store traversed output

   while (top <= bottom && left <= right) {
      if (direction === 0) {
         // left to right traversal
         for (let i = left; i <= right; i++) {
            output.push(matrix[top][i]);
         }

         top++;
      }

      else if (direction === 1) {
         // top to bottom traversal
         for (let i = top; i <= bottom; i++) {
            output.push(matrix[i][right]);
         }

         right--;
      }

      else if (direction === 2) {
         // right to left traversal
         for (let i = right; i >= left; i--) {
            output.push(matrix[bottom][i]);
         }

         bottom--;
      }

      else if (direction === 3) {
         // bottom to top traversal
         for (let i = bottom; i >= top; i--) {
            output.push(matrix[i][left]);
         }

         left++;
      }

      direction = (direction + 1) % 4; // 4 possible direction, that's why mod by 4
   }

   return output;
};