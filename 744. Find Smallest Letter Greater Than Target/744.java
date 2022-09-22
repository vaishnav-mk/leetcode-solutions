class Solution {
    public char nextGreatestLetter(char[] letters, char target) {

        int start = 0;
        int end = letters.length - 1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            
            if (target < letters[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return letters[start % letters.length];
    }
}

/*
Runtime: 1 ms, faster than 60.94% of Java online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 48 MB, less than 55.32% of Java online submissions for Find Smallest Letter Greater Than Target.
*/
