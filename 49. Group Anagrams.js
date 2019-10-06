// Time Complexity: O(n k logk) n = number of strings, k = length of strings; klogk comes because of sorting; n for n time iterations
// Space Complexity: O(n k)

const groupAnagrams = function (strs) {
    let groupAnagram = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let key = word.split("").sort().join(); //turn the word into a word sorted in alphabetical order

        if (!groupAnagram[key]) {
            groupAnagram[key] = [];
        }

        groupAnagram[key].push(word);
    }

    return Object.values(groupAnagram); // will return in [ [], [], [] ] form
};