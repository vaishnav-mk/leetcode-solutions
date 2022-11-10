function longestCommonPrefix(strings: string[]): string {
    if (!strings.length) return "";
    if (strings.length === 1) return strings[0];
    let prefix = "";
    while(strings.every(str => str.startsWith(prefix))) {
        let newPrefix = strings[0].substring(0, prefix.length + 1)
        if (newPrefix.length > prefix.length) prefix = newPrefix;
        else if (newPrefix.length === prefix.length) return newPrefix;
        else break; 
    }
    return prefix.slice(0, -1);
};

/*
Runtime
115 ms
Beats
51.46%
Memory
44.4 MB
Beats
74.71%
*/
