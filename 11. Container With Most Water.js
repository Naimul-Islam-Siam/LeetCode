/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area, maxArea = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i+1; j < height.length; j++) {
            area = Math.min(height[i], height[j]) * Math.abs(i - j);
            if(area > maxArea) maxArea = area;
        }
    }
    
    return maxArea;
};