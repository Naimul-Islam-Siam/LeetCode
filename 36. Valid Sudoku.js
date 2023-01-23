// Time Complexity: O(9^2)
// Space Complexity: O(9^2)
function isValidSudoku(board) {
   let rowVisited = new Array(9).fill().map(() => new Set()) // [Set, Set, Set, Set, Set, Set, Set, Set, Set]
   let columnVisited = new Array(9).fill().map(() => new Set()) // [Set, Set, Set, Set, Set, Set, Set, Set, Set]
   // [[Set, Set, Set], [Set, Set, Set], [Set, Set, Set]]
   let subBoxVisited = new Array(3).fill().map(() => new Array(3).fill().map(() => new Set()));

   for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
         let currentDigit = board[i][j];

         if (currentDigit !== ".") {
            let boxRow = Math.floor(i / 3);
            let boxCol = Math.floor(j / 3);

            if (rowVisited[i].has(currentDigit) ||
               columnVisited[j].has(currentDigit) ||
               subBoxVisited[boxRow][boxCol].has(currentDigit)
            ) {
               return false;
            }

            rowVisited[i].add(currentDigit);
            columnVisited[j].add(currentDigit);
            subBoxVisited[boxRow][boxCol].add(currentDigit);
         }
      }
   }

   return true;
};