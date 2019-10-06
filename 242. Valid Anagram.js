// Time Complexity: O(nlogn)
const isAnagram = function (s, t) {
    s = s.split("").sort().join();  //sort in alphabetic order
    t = t.split("").sort().join();  //sort in alphabetic order

    return s === t;
};

// better
//Time Complexity: O(n)
//Space Complexity: O(1); hashtable will have at most 26 keyss

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let charMap = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];

        if (charMap[charS]) charMap[charS] = charMap[charS] + 1;
        else charMap[charS] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        let charT = t[i];
        if (!charMap[charT]) return false;
        else charMap[charT] = charMap[charT] - 1;
    }

    return true;
};