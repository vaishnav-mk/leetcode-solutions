/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let res = 1;
    for (let num of nums) {
        if (num == 0) return 0;
        if (num < 0) res *= -1;
    }
    return res;
};

/*
Runtime: 104 ms, faster than 24.02% of JavaScript online submissions for Sign of the Product of an Array.
Memory Usage: 44 MB, less than 28.58% of JavaScript online submissions for Sign of the Product of an Array.
*/
