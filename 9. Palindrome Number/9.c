bool isPalindrome(int x) {
  char str[1000];
  sprintf(str, "%d", x);
  int len = strlen(str);
  if (x < 0) {
    return false;
  }
  for (int i = 0; i <= (len / 2); i++) {
    if (str[i] == str[len - i - 1]) continue;
    return false;
  }
  return true;
}

/*
Runtime: 28 ms, faster than 28.58% of C online submissions for Palindrome Number.
Memory Usage: 6.1 MB, less than 10.33% of C online submissions for Palindrome Number.
*/
