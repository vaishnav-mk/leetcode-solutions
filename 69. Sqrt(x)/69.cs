public class Solution {
    public int MySqrt(int x) {
        if (x < 1) { 
            return x;
        }
        long res = x;
        while (res * res > x)
        res = (res + x/res)/2;
        return (int)res;
    }
}
/*
Runtime: 21 ms, faster than 95.50% of C# online submissions for Sqrt(x).
Memory Usage: 26.7 MB, less than 12.89% of C# online submissions for Sqrt(x).
*/
