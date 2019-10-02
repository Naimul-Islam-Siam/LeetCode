// sliding window approach
// time complexity : O(n), space complexity: O(min(m,n))   m = length of string, n = number of keys in hashmap


const lengthOfLongestSubstring = function (s) {
    let charMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (i > charMap[currentChar]) {
            windowStart = Math.max(windowStart, charMap[currentChar] + 1);
            // i = current index of the char, if i > char's value in hashmap; which means duplicacy of that char
            // start of window will be maximum of 1+char's value in hashmap(to skip it so that the char when it previously found is not included in the sliding window)  previously stored window
        }

        charMap[currentChar] = i; // new value of the char in hashmap will be updated to current index
        maxLength = Math.max(maxLength, i - windowStart + 1); // i - windowStart + 1 = length of sliding window

    }

    return maxLength;
};