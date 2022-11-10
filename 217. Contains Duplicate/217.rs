use std::collections::HashSet;
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut existing = HashSet::new();
        return nums.into_iter().any(|n| !existing.insert(n));
    }
}
      
/*
Runtime
11 ms
Beats
93.49%
Memory
3 MB
Beats
94.12%
*/
