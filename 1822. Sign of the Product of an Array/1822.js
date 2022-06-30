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
Runtime: 81 ms, faster than 63.73% of JavaScript online submissions for Sign of the Product of an Array.
Memory Usage: 44.5 MB, less than 7.13% of JavaScript online submissions for Sign of the Product of an Array.
*/
