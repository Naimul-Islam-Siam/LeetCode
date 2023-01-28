/*
   Given an array of integers nums containing n + 1 integers 
   where each integer is in the range[1, n] inclusive.
   (Pigeonhole Principle)

   There is only one repeated number in nums, return this repeated number.

   You must solve the problem without modifying the array nums 
   and uses only constant extra space.


   Input: nums = [1, 3, 4, 2, 2]
   Output: 2

   Input: nums = [3, 1, 3, 4, 2]
   Output: 3
*/

// --- Negative Marking ---
// Time Complexity: O(n)
// Space Complexity: O(1)
// But doesn't satisfy the constraints, as we are modifying the input array
function findDuplicate(nums) {
   for (let i = 0; i < nums.length; i++) {
      let currentNum = Math.abs(nums[i]);

      if (nums[currentNum] < 0) {
         return currentNum; // if the number is already a negative number, this means its a duplicate
      }

      nums[currentNum] = 0 - nums[currentNum]; // turn the number into its negative version
   }
};


// --- Floyd's Tortoise and Hare ---
// Time Complexity: O(n)
// Space Complexity: O(1)
// Doesn't Modify the input array and also performs in constant space
function findDuplicate(nums) {
   let slow = nums[0];
   let fast = nums[0];

   // Linked list cycle technique (Floyd's Tortois and Hare)
   do {
      slow = nums[slow]; // will always move 1 step
      fast = nums[nums[fast]]; // will always move 2 steps
   } while (slow != fast)

   // move fast to 0-th position after slow and fast collides
   // but start will remain where it was during the collison
   fast = nums[0];

   while (slow != fast) {
      // after the first collison, both pointers will move by 1 step until they collide again
      slow = nums[slow];
      fast = nums[fast];
   }

   return slow;
};