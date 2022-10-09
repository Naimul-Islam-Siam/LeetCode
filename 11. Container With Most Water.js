/*
    You are given an integer array height of length n. 
    There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
        In this case, the max area of water (blue section) the container can contain is 49.
*/

// Time Complexity: O(n^2)

const maxArea = function (height) {
    let area, maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            area = Math.min(height[i], height[j]) * Math.abs(i - j);
            if (area > maxArea) maxArea = area;
        }
    }

    return maxArea;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

function maxArea(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while (start < end) { // if end < start that means all the elements are already compared
        const currentArea = Math.min(height[start], height[end]) * (end - start); //height gottabe the lower among two edges otherwise container can't be made, width = end - start
        maxArea = Math.max(currentArea, maxArea);

        if (height[start] < height[end]) start++;
        else end--;
    }

    return maxArea;
};