/*
    Input: nums = [2, 7, 11, 15], target = 9
    Output: [0, 1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.
*/

// Time Complexity: O(n^2)
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};


// Time Complexity: O(n) [each element of array is traversed only once and then we look up at hash table which is O(1)]
// Space Complexity: O(n) [number of key value pairs stored at hash map]

const twoSum = function (nums, target) {
    const visited = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const rem = target - num;

        if (visited[rem] !== undefined) {
            result.push(i);
            result.push(visited[rem]);
        }

        visited[num] = i;
    }

    return result;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {
    let visited = new Map();

    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];

        if (visited.has(remaining)) {
            return [visited.get(remaining), i];
        }

        visited.set(nums[i], i);
    }
};