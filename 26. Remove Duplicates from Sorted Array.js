/*
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 */

const removeDuplicates = function (nums) {
    let j = 0;

    if (nums.length === 0) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};