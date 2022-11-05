/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const len = nums.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        let swap = nums[j];
        nums[j] = nums[i];
        nums[i] = swap;
      }
    }
  }
};

/*
Runtime
98 ms
Beats
70.52%
Memory
42.7 MB
Beats
86.93%
*/
