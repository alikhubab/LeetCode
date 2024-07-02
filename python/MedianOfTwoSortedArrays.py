import math
from typing import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged_list = (nums1 + nums2)
        merged_list.sort()
        half_index = math.floor(len(merged_list) / 2)
        half_value = merged_list[half_index]
        if len(merged_list) % 2 == 0:
            return (merged_list[half_index - 1] + half_value) / 2
        return half_value


sol = Solution()
median = sol.findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9])
print(median)
