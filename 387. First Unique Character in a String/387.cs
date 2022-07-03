public class Solution {
    public int FirstUniqChar(string s) {
        for(int i = 0; i < s.Length; i++) {
            if(s.IndexOf(s[i]) == s.LastIndexOf(s[i])) {
                return i;
            }
        }
        return -1;
    }
}
/*
Runtime: 89 ms, faster than 85.38% of C# online submissions for First Unique Character in a String.
Memory Usage: 45.2 MB, less than 15.66% of C# online submissions for First Unique Character in a String.
*/
