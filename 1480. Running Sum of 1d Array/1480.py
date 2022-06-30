class Solution:
    def runningSum(self, nums):
        result=[]
        s=0
        for i in nums:
            s+=i
            result.append(s)
        return result
      
"""
Runtime: 31 ms, faster than 75.79% of Python online submissions for Running Sum of 1d Array.
Memory Usage: 13.4 MB, less than 96.69% of Python online submissions for Running Sum of 1d Array.
"""
