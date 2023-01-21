/*
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

    Input: intervals = [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function merge(intervals) {
    // intervals are not sorted in order in question, that's why we need to sort them first
    // ask interviewer first whether the intervals are sorted or not
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let i = 1;

    while (i < intervals.length) {
        if (intervals[i][0] <= intervals[i - 1][1]) {
            intervals[i - 1][1] = Math.max(intervals[i][1], intervals[i - 1][1]);

            intervals.splice(i, 1); // remove i-th interval from intervals array
        } else {
            i++;
        }
    }

    return intervals;
};