/**
 * @param {number} x
 * @return {boolean}
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