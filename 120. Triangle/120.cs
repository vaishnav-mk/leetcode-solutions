public class Solution {
    public int MinimumTotal(IList<IList<int>> triangle)
        {

            for (int i = triangle.Count - 2; i >= 0; i--)
            {
                for (int a = triangle[i].Count - 1; a >= 0; a--)
                {
                    triangle[i][a] += Math.Min(triangle[i + 1][a], triangle[i + 1][a+1]);
                }
            }

            return triangle[0][0];
        }
}
/*
Runtime: 105 ms, faster than 92.14% of C# online submissions for Triangle.
Memory Usage: 39.9 MB, less than 16.11% of C# online submissions for Triangle.
*/
