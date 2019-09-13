/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            index = i;
            break;
        }
        else {
            if (nums[i] > target) {
                index = i;
                break;
            }
            if (target > nums[nums.length - 1]) {
                index = nums.length;
                break;
            }
        }
    }

    return index;
};