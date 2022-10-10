impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let mut nums = vec![];
        nums.append(&mut nums1.clone());
        nums.append(&mut nums2.clone());
        nums.sort();

        match nums.iter().count() {
            x if x % 2 != 0 => {
                *nums.get(x/2).unwrap() as f64
            },
            x if x % 2 == 0 => {
                (*nums.get((x-1)/2).unwrap() as f64 + *nums.get(x/2).unwrap() as f64)/2 as f64
            },
            _ => 0 as f64
        }
    }
}
      
/*
Runtime0 ms
Beats
100%
Memory2.3 MB
Beats
27.12%
*/
