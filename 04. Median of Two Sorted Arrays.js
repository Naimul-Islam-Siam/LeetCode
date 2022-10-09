/*
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

const findMedianSortedArrays = function (nums1, nums2) {
    nums1 = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    let median;
    if (nums1.length % 2 == 1) median = nums1[(nums1.length - 1) / 2];
    if (nums1.length % 2 == 0) median = (nums1[Math.ceil((nums1.length - 1) / 2)] + nums1[Math.floor((nums1.length - 1) / 2)]) / 2;

    return median;
};