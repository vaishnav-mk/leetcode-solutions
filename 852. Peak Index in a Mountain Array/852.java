class Solution {
    public int peakIndexInMountainArray(int[] arr) {
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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Peak Index in a Mountain Array.
Memory Usage: 73.1 MB, less than 48.55% of Java online submissions for Peak Index in a Mountain Array.
*/
