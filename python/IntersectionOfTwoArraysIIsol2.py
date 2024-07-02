# Given two integer arrays nums1 and nums2, return an array of their
# intersection. Each element in the result must appear as many times as it shows in both
# arrays and you may return the result in any order.
#
#
#  Example 1:
#
#
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]
#
#
#  Example 2:
#
#
# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [4,9]
# Explanation: [9,4] is also accepted.
#
#
#
#  Constraints:
#
#
#  1 <= nums1.length, nums2.length <= 1000
#  0 <= nums1[i], nums2[i] <= 1000
#
#
#
#  Follow up:
#
#
#  What if the given array is already sorted? How would you optimize your
# algorithm?
#  What if nums1's size is small compared to nums2's size? Which algorithm is
# better?
#  What if elements of nums2 are stored on disk, and the memory is limited such
# that you cannot load all elements into the memory at once?
#
#
#  Related Topics Array Hash Table Two Pointers Binary Search Sorting 👍 7510 👎
#  951
from collections import Counter


# leetcode submit region begin(Prohibit modification and deletion)
class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        count1 = Counter(nums1)
        count2 = Counter(nums2)
        res = []
        for num in count1:
            if num in count2:
                res.extend([num] * min(count1[num], count2[num]))

        return res
# leetcode submit region end(Prohibit modification and deletion)

if __name__ == '__main__':
    solution = Solution()
    nums1 = [1, 2, 2, 1, 3,1,3]
    nums2 = [2]
    result = solution.intersect(nums1, nums2)
    print(result)


# Success:
# 	Runtime:38 ms, faster than 23.83% of Python online submissions.
# 	Memory Usage:11.8 MB, less than 50.64% of Python online submissions.
