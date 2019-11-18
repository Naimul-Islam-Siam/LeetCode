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