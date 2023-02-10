/*
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
*/


// Time Complexity = O(n)
// Space Complexity = O(1)
function maxProfit(prices) {
    let min = prices[0], max = prices[0], maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = prices[i];
        }

        if (prices[i] > max) {
            max = prices[i];
        }

        maxProfit = Math.max(max - min, maxProfit);
    }

    return maxProfit;
};


// Runtime: 48 ms, faster than 100% of JavaScript
// Memory Usage: 35.5 MB, less than 100% of JavaScript
const maxProfit = prices => {
    let maxPro = 0;
    let cheapestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < cheapestPrice) {
            cheapestPrice = prices[i];
        }

        const profit = prices[i] - cheapestPrice;

        maxPro = Math.max(profit, maxPro);
    }

    return maxPro;
};