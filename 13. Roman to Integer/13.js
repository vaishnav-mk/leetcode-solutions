/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map()
    romanMap.set("I", 1)
            .set("V", 5)
            .set("X", 10)
            .set("L", 50)
            .set("C", 100)
            .set("D", 500)
            .set("M", 1000)
    const n = s.length
    let num = romanMap.get(s[n-1])
    for (let i = n - 2; i >= 0; i--) {
        if (romanMap.get(s[i]) >= romanMap.get(s[i+1])) {
            num += romanMap.get(s[i])
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num
};

/*
Runtime: 125 ms, faster than 95.67% of JavaScript online submissions for Roman to Integer.
Memory Usage: 48.8 MB, less than 21.97% of JavaScript online submissions for Roman to Integer.
*/
