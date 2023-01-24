/*
   You are given an n x n integer matrix board where the cells are labeled from 1 to n2

   You start on square 1 of the board
   Choice simulates the result of a standard 6-sided die roll

   A board square on row r and column c has a snake or ladder if board[r][c] != -1
   The destination of that snake or ladder is board[r][c]
   if a square doesn't have ladder or snake, borad[r][c] = -1

   Return the least number of moves required to reach the square n2. 
   If it is not possible to reach the square, return -1.

   https://youtu.be/6lH4nO3JfLk
*/

// Time Complexity: O(n^2) [worst-case, incase we have to traverse the entire square board]
// Space Complexity: O(n^2) [worst-case, incase every value is in the queue] 
function snakesAndLadders(board) {
   /*
      as the bottom most row of the snake-board is in the last row of `board` array 
      and the top most row of the snake-board is in the first row of `board` array

      we'll reverse the `board` array first for ease of use
   */

   board = board.reverse();
   let n = board.length;
   let queue = [[1, 0]]; // [square, moveCount]
   // as the board starts from square 1 always, and initially number of move is 0.
   let visited = new Set();

   // will help finding the co-ordinate (row, column) of each square
   const findCoordinate = (square) => {
      let row = Math.floor((square - 1) / n);
      let col = (square - 1) % n;

      // to imitate the zig-zag traversal of board as mentioned in the question
      if (row % 2 == 1) {
         col = n - 1 - col; // incase the row is odd indexed
      }

      return [row, col];
   };

   while (queue.length != 0) {
      let [currentSquare, moveCount] = queue.shift();

      // as 6-sided die roll has value from 1 to 6
      for (let i = 1; i <= 6; i++) {
         let nextSquare = currentSquare + i;
         let [row, col] = findCoordinate(nextSquare);

         if (board[row][col] !== -1) {
            // this will mean either there's a ladder or a snake in that square
            // so we have to replace the value with destination square
            nextSquare = board[row][col];
         }

         if (nextSquare === n * n) {
            // n^2 indicates the final square
            return moveCount + 1;
         }

         if (!visited.has(nextSquare)) {
            queue.push([nextSquare, moveCount + 1]);
            visited.add(nextSquare);
         }
      }
   }

   return -1;
};