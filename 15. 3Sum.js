/*
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
*/

// Time Complexity = O(n^2)
// Space Complexity = O(1)

//Runtime: 148 ms, faster than 96.32% of JavaScript
//Memory Usage: 46.8 MB, less than 72.00 % of JavaScript

const threeSum = nums => {
    nums = nums.sort((a, b) => a - b);
    let resultArray = [];

    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        // avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue; //avoid element having the same value as previous

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                resultArray.push([nums[left], nums[i], nums[right]]);
                left++;

                //avoid iterations for same value that is there for multiple times [-1, -1]
                while (nums[left] === nums[left - 1]) left++;
            }
            else if (nums[left] + nums[right] < target) left++;
            else if (nums[left] + nums[right] > target) right--;
        }
    }

    return resultArray;
};