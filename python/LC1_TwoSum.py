from typing import List
# 7
def two_sum(nums: List[int], target: int) -> int:
    max_sum = max(nums)
    map = {}
    for i in range(len(nums)):
        compliment = target - nums[i]
        if compliment in map:
            return [map[compliment], i]
        map[nums[i]] = i

print(two_sum([2, 7, 11, 15], 9))


 # [1,2,3,4,5,6,7,8] - 5
 # { 1: 0, 2: 1,   }  -> [1,