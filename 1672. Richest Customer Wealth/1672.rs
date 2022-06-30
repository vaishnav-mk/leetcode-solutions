impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut max: i32 = 0;
        for customer in accounts.iter()
        {
            let wealth: i32 = customer.iter().sum();
            if wealth > max
            {
                max = wealth;
            }
            
        }
        max
    }
}
/*
Runtime: 3 ms, faster than 22.93% of Rust online submissions for Richest Customer Wealth.
Memory Usage: 2.1 MB, less than 55.41% of Rust online submissions for Richest Customer Wealth.
*/
