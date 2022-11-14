impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut val = i32::MAX;
        let mut profit = 0;
        for price in prices {
            val = i32::min(val, price);
            profit = i32::max(price-val, profit);
        }
        return profit;
    }
}
/*
Runtime
24 ms
Beats
42.41%
Memory
3.1 MB
Beats
26.97%
*/
