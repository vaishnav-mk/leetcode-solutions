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
