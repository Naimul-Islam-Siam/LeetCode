/*
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
        Therefore it is not a palindrome.
 */

var isPalindrome = function (x) {
    let reverseX = parseInt(x.toString().split("").reverse().join(""));

    if (x == reverseX) return true;
    else return false;
};


//without converting to string
//168ms (96.50% faster than others in JS) //44.7MB (98.28% faster than others in JS)

const isPalindrome = function (x) {
    if (reverseInt(x) == x) return true;
    else return false;
};

const reverseInt = function (num) {
    let revNum = 0;
    while (num > 0) {
        revNum = revNum * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return revNum;
}