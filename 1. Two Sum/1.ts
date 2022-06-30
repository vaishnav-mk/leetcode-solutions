function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    if (hash.hasOwnProperty(num)) {
      return [hash[num], index];
    }

    hash[target - num] = index;
  }

  return [Infinity, Infinity];
};

/*
Runtime: 118 ms, faster than 58.12% of TypeScript online submissions for Two Sum.
Memory Usage: 45.3 MB, less than 39.78% of TypeScript online submissions for Two Sum.                       
*/
