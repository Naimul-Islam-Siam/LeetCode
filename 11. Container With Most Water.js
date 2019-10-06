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