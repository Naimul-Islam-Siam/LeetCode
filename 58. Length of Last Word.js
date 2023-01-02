// Time Complexity: O(n)
// Space Complexity: O(1)
function lengthOfLastWord(s) {
   let count = 0;

   for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
         count++;
      } if (count > 0 && s[i] === " ") {
         break;
      }
   }

   return count;
};