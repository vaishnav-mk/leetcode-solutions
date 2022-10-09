impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut end = nums.len();
        let mut num = 0;
        
        while num < end {
            while end > num && nums[num] == val {
                nums[num] = nums[end - 1];
                end -= 1;
            }
            num += 1;
        }
        while num > 0 && nums[num - 1] == val { 
            num -= 1; 
        }
        num as i32
    }
}
      
/*
Runtime3 ms
Beats
22.29%
Memory2.1 MB
Beats
32.53%
*/
