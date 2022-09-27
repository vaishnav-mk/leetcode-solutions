public class Solution {
  public int Reverse(int x) {
    string output = string.Empty;
    foreach(char value in x.ToString()) {
      if (value.ToString() != "-") {
        output = value + output;
      }
    }

    if (x < 0) {
      output = "-" + output;
    }

    return int.TryParse(output, out x) ? x : 0;
  }
}
/*
Runtime: 38 ms, faster than 57.30% of C# online submissions for Reverse Integer.
Memory Usage: 25.8 MB, less than 43.41% of C# online submissions for Reverse Integer.
*/
