/*
   Input: numRows = 5
   Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

   Input: numRows = 1
   Output: [[1]]
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n^2) considering output otherwise O(1)
function generate(numRows) {
   if (numRows == 0) {
      return [];
   }

   if (numRows == 1) {
      return [[1]]
   }

   let output = [[1], [1, 1]];

   let i = 1;

   while (i < numRows - 1) {
      let elements = [1];
      for (let j = 0; j < output[i].length - 1; j++) {
         let num = output[i][j] + output[i][j + 1];
         elements.push(num);
      }
      elements.push(1);
      output.push(elements);

      i++;
   }

   return output;
};