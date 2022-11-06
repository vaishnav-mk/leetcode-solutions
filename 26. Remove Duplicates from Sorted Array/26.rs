impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut a = 1;
        let mut b = 0;

        while b < nums.len() {
            if nums[a - 1] != nums[b] {
                nums[a] = nums[b];
                i += 1;
            }
            b += 1;
        }

        a as i32
    }
}
