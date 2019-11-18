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