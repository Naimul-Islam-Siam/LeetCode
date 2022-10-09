/*
    Input: x = 123
    Output: 321

    Input: x = -123
    Output: -321

    Input: x = 120
    Output: 21
 */

const reverse = function (x) {
    x = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));
    if (x > (Math.pow(2, 31) - 1) || x < (Math.pow(-2, 31))) x = 0;

    return x;
};