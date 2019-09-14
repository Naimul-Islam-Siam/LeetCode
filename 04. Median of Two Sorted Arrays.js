/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    nums1 = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    let median;
    if (nums1.length % 2 == 1) median = nums1[(nums1.length - 1) / 2];
    if (nums1.length % 2 == 0) median = (nums1[Math.ceil((nums1.length - 1) / 2)] + nums1[Math.floor((nums1.length - 1) / 2)]) / 2;

    return median;
};