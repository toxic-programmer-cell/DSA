const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let minVal = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minVal) {
      minVal = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minVal);
    }
  }
  return maxProfit;
};

console.log(maxProfit(prices));
