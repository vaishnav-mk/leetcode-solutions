public class Solution {
    public char FindTheDifference(string s, string t) {
        char[] a = s.ToCharArray();
        char[] b = t.ToCharArray();
        Array.Sort(a);
        Array.Sort(b);
        for(int i=0;i<a.Length;i++)
            if(a[i]!=b[i])
                return b[i];
        return b[b.Length-1];
    }
}

/*
Runtime: 148 ms, faster than 22.53% of C# online submissions for Find the Difference.
Memory Usage: 38.1 MB, less than 52.66% of C# online submissions for Find the Difference.
*/
