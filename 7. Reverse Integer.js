/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    x = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));
    if (x > (Math.pow(2, 31) - 1) || x < (Math.pow(-2, 31))) x = 0;

    return x;
};