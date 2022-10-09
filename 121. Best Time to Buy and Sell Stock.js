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

//Runtime: 48 ms, faster than 98.88% of JavaScript
//Memory Usage: 35.5 MB, less than 44.44% of JavaScript

const maxProfit = prices => {
    let maxPro = 0;
    let cheapestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < cheapestPrice) cheapestPrice = prices[i];

        const profit = prices[i] - cheapestPrice;

        maxPro = Math.max(profit, maxPro);
    }

    return maxPro;
};