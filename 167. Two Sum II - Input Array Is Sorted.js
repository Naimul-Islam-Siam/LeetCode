/*
   Input: numbers = [2,7,11,15], target = 9
   Output: [1,2]
   Explanation: The sum of 2 and 7 is 9. 
      Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
function twoSum(numbers, target) {
   let left = 0;
   let right = numbers.length - 1;

   while (left < right) {
      if (numbers[left] + numbers[right] > target) {
         right--;
      } else if (numbers[left] + numbers[right] < target) {
         left++;
      } else if (numbers[left] + numbers[right] == target) {
         return [left + 1, right + 1]; // output considers 1-indexed array (array index starts from 1 instead of 0)
      }
   }
};