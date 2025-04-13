from typing import List

# Sorted array 7
def two_sum_II(nums: List[int], target: int) -> List[int]:
    left, right = 0, len(nums) - 1
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum > target:
            left += 1
        elif curr_sum < target:
            right -= 1
        else: return [left, right]

print(two_sum_II([1,2,3,4,5,6], 7))