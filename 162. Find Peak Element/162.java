class Solution {
    public int findPeakElement(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        
        while (start < end) {
            int mid = start + (end-start) / 2;
            if (arr[mid] > arr[mid+1]){
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }
}

/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Find Peak Element.
Memory Usage: 43.3 MB, less than 16.23% of Java online submissions for Find Peak Element.
*/
