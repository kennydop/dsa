var maxProfit = function (prices) {
  const count = prices.length;
  if (count <= 1) return 0;
  var i = 0,
    j = 1,
    profit = 0;
  while (j < count) {
    if (prices[j] < prices[i]) {
      i = j;
    } else {
      profit = Math.max(profit, prices[j] - prices[i]);
    }
    j += 1;
    console.log(profit);
  }
  return profit;
};
