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

        if (pairMap[char]) stack.push(char); // if the char is eligible to be in stack
        else {
            let top = stack[stack.length - 1];
            char == pairMap[top] ? stack.pop() : stack.push(char); // if the char is the valid pair of the top of the stack, pop the top
        }
    }

    return stack.length == 0; // if the stack is empty result is true
};