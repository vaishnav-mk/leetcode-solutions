const kLengthApart = (nums: number[], k: number): boolean => {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 && j > 0) { 
            return false;
        } 
        j = nums[i] === 1 ? k : j - 1;
    }
    return true
};
/*
Runtime
144 ms
Beats
46.15%
Memory
50.8 MB
Beats
30.77%
*/
