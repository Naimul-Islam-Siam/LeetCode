/*
   Input: s = "Let's take LeetCode contest"
   Output: "s'teL ekat edoCteeL tsetnoc"
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function reverseWords(s) {
   let left = 0, right;
   s = s.split(""); // as string is immutable in JavaScript, we need to convert it to array first

   for (let i = 0; i < s.length; i++) {
      if (s[i] == " " || i == s.length - 1) {
         right = i - 1;

         if (i == s.length - 1) {
            right = i;
         }

         while (left < right) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
         }

         left = i + 1;
      }
   }

   return s.join("");
};