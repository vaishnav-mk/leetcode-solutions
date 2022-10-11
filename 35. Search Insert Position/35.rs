impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 { 
        for (i, n) in nums.iter().enumerate() {
            if n == &target || n > &target {
                return (i as i32) ;
            }
        }
        nums.len() as i32
    }
}
      
/*
Runtime0 ms
Beats
100%
Memory2.3 MB
Beats
7.67%
*/
