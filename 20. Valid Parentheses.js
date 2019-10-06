// Time Complexity: O(n)
// Space Complexity: O(n) at worst case;

const isValid = function (s) {
    let stack = [];
    let pairMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pairMap[char]) stack.push(char);
        else {
            let top = stack[stack.length - 1];
            char == pairMap[top] ? stack.pop() : stack.push(char);
        }
    }

    return stack.length == 0;
};