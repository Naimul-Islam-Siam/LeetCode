/*
   Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

   You must do it in place. (Don't use extra array)
*/

// Time Complexity: O(n*m) n = row.length, m = col.length
// Space Complexity: O(n+m)
function setZeroes(matrix) {
   let rowArr = [];
   let colArr = [];

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         if (matrix[i][j] === 0) {
            rowArr[i] = 0;
            colArr[j] = 0;
         }
      }
   }

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         if (rowArr[i] === 0 || colArr[j] === 0) {
            matrix[i][j] = 0;
         }
      }
   }

   return matrix;
};


// Time Complexity: O(n^2)
// Space Complexity: O(1)
function setZeroes(matrix) {
   let flag = false;
   let rowLength = matrix.length;
   let colLength = matrix[0].length;

   for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
         if (matrix[i][j] === 0) {
            /*
                - if a whole column is to be set to zero, we will set the first row of that column to zero
                - if a whole row is to be set to zero, we will set the first column of that row to zero, 
                    unless i = 0, in that case we will set flag = true to avoid confusion on whether the first column should be zero or the first row should be zero. 
                    flag = true will mean whole 1st row should be set to zero
                    and matrix[0][0] == 0 will mean the whole 1st column should be set to zero
             */

            matrix[0][j] = 0 // set the first row of that (j-th) column to zero

            if (i == 0) {
               flag = true; // if i is 0 or current row is the first row, set flag to true
            } else {
               // if the current row is not the first row or i > 0, set the first column of that row to zero
               matrix[i][0] = 0;
            }
         }
      }
   }

   // start from 2nd row (i = 1) and 2nd column (j = 1) and skip 1st row (i = 0) and 1st column (j = 0)
   for (let i = 1; i < rowLength; i++) {
      for (let j = 1; j < colLength; j++) {
         if (matrix[0][j] == 0 || matrix[i][0] == 0) {
            // if any of the element from first row of that column or first column of that row is zero, set current element to zero
            matrix[i][j] = 0;
         }
      }
   }

   // now consider 1st row and 1st column (i =0, j = 0)
   // if first cell (first row and first column) or [0][0] is zero, this means the whole 1st column (j = 0)for every row should be set to zero
   if (matrix[0][0] == 0) {
      for (let i = 0; i < rowLength; i++) {
         matrix[i][0] = 0;
      }
   }

   // if flag == true, this means the whole 1st row (i = 0)for every column should be set to zero
   if (flag == true) {
      for (let j = 0; j < colLength; j++) {
         matrix[0][j] = 0;
      }
   }

   return matrix;
};