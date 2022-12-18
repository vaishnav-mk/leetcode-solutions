function isValid(s: string): boolean {
    let stack = []
    const brackets = {"(":")", "{":"}", "[":"]"}
    for (let i = 0; i < s.length; i++) {
        if (Object.keys(brackets).includes(s[i])) {
            stack.push(s[i])
        } else if (brackets[stack.pop()] !== s[i]) {
            return false
        }
    }
    return stack.length === 0
};

/*
Runtime
70 ms
Beats
94.8%
Memory
46.4 MB
Beats
9.3%
*/
