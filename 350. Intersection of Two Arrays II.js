/*
   Given two integer arrays nums1 and nums2, 
   return an array of their intersection. 
   Each element in the result must appear as many times as it shows 
   in both arrays and you may return the result in any order.

   Input: nums1 = [1,2,2,1], nums2 = [2,2]
   Output: [2,2]

   Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
   Output: [4,9]
   Explanation: [9,4] is also accepted.
*/

// Time Complexity: O(n+m) n -> num1.length, m -> nums2.length 
// Space Complexity: O(n)
function intersect(nums1, nums2) {
   let visited = new Map();
   let result = [];

   for (let i = 0; i < nums1.length; i++) {
      if (!visited.has(nums1[i])) {
         visited.set(nums1[i], 1);
      } else {
         visited.set(nums1[i], visited.get(nums1[i]) + 1);
      }
   }

   for (let i = 0; i < nums2.length; i++) {
      if (visited.has(nums2[i])) {
         result.push(nums2[i]);

         let countVal = visited.get(nums2[i]);
         visited.set(nums2[i], countVal - 1);

         if (countVal == 1) {
            visited.delete(nums2[i]);
         }
      }
   }

   return result;
};