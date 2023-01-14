/*
   You have to rotate the image in-place, 
   which means you have to modify the input 2D matrix directly. 
   DO NOT allocate another 2D matrix and do the rotation.

   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [[7,4,1],[8,5,2],[9,6,3]]

   Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
   Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function rotate(matrix) {
   // Transpose
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
         if (i == j) {
            continue;
         }

         let temp = matrix[i][j];
         matrix[i][j] = matrix[j][i];
         matrix[j][i] = temp;
      }
   }

   // Reverse Columns
   let n = Math.floor(matrix.length / 2);

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < n; j++) {
         const temp = matrix[i][j];
         matrix[i][j] = matrix[i][matrix.length - 1 - j];
         matrix[i][matrix.length - 1 - j] = temp;
      }
   }

   return matrix;
};