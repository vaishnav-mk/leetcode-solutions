function lengthOfLongestSubstring(s: string): number {
    const arr: string[] = [];
    let max = 0;
    for (const c of s) {
        if (arr.includes(c)) {
            arr.splice(0, arr.indexOf(c) + 1);
        }
        arr.push(c);
        max = Math.max(max, arr.length);
    }
    return max;
}

/*
Runtime
90 ms
Beats
97.84%
Memory
47.3 MB
Beats
81.73%
*/
