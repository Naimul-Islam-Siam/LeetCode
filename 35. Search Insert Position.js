/*
    Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.

    Input: nums = [1,3,5,6], target = 5
    Output: 2

    You must write an algorithm with O(log n) runtime complexity.
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
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

// Time Complexity: O(logn)
// Space Complexity: O(1)
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1, mid;

    if (target < nums[left]) {
        return 0;
    }

    if (target > nums[right]) {
        return right + 1;
    }

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};