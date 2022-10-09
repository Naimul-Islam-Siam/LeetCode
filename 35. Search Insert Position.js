/*
    Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.

    Input: nums = [1,3,5,6], target = 5
    Output: 2

    You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = function (nums, target) {
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