class Solution {
    public int FindInMountainArray(int target, MountainArray mountainArr) {
		int peak = SearchPeak(mountainArr);
		
        if (target == mountainArr.Get(peak))
        {
            return peak;
        }
        
        int result = BinarySearch(target, mountainArr, 0, peak-1, 1);
        
        if (result < 0)
        {
            return BinarySearch(target, mountainArr, peak+1, mountainArr.Length()-1, -1);
        }
        return result;
    }
    
    private int SearchPeak(MountainArray mountainArr)
    {
        int length = mountainArr.Length();
        int left = 0;
        int right = length;
        int peak = 0;
        
        while(left<right)
        {
            peak = (left + right) / 2;
            if (mountainArr.Get(peak-1) < mountainArr.Get(peak) 
                && mountainArr.Get(peak) < mountainArr.Get(peak+1))
            {
                left = peak-1;
            }
            else if (mountainArr.Get(peak-1) > mountainArr.Get(peak) 
                && mountainArr.Get(peak) > mountainArr.Get(peak+1))
            {
                right = peak+1;
            }
            else
            {
                return peak;
            }
        }
        return 0;
    }
    
    private int BinarySearch(int val, MountainArray mountainArr, int left, int right, int side)
    {
        int lookup = 0;
        
        while(left<=right)
        {
            lookup = (left + right) / 2;
            if (mountainArr.Get(lookup)*side < val*side)
            {
                left = lookup+1;
            }
            else if (mountainArr.Get(lookup)*side > val*side)
            {
                right = lookup-1;
            }
            else
            {
                return lookup;
            }
        }
        return -1;
    }
}

/*
Runtime: 96 ms, faster than 91.67% of C# online submissions for Find in Mountain Array.
Memory Usage: 39.4 MB, less than 13.89% of C# online submissions for Find in Mountain Array.
*/
