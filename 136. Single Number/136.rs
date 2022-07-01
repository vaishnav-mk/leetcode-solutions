impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        nums.iter().fold(0, |a, i| i^a)
    }
}

/*
Runtime: 0 ms, faster than 100.00% of Rust online submissions for Single Number.
Memory Usage: 2.3 MB, less than 52.16% of Rust online submissions for Single Number.
*/
