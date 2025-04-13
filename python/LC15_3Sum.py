# Brute Force
# Complexity: O(n^3)
# Space Complexity: O(1)
def three_sum_brute(nums, target: int):
    triplets = []
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] > target:
                continue
            for k in range( j + 1, len(nums)):
                if nums[i] + nums[j] + nums[k] == target:
                    triplets.append([(nums[i], i), (nums[j], j), (nums[k], k)])
    return triplets
print(three_sum_brute([-3,3,4,-3,1,2], 0))

# optimized
# Time Complexity: nlogn + n^2 = O(n^2)
# Space Complexity: O(1) or O(n) because of sorting in some languages.
# 7
def three_sum(nums):
    res = []
    nums.sort()

    for i, n in enumerate(nums):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            tp = n + nums[l] + nums[r]
            if tp > 0:
                r -= 1
            elif tp < 0:
                l += 1
            else:
                res.append([n, nums[l], nums[r]])
                l += 1
                while nums[l] == nums[l - 1] and l < r:
                    l += 1
    return res

print(three_sum([-1,-1,1,2,-3]))

#  -1, -1, -1,
#  -1, -1, 2
#  -1, -1, 2
#


# nums = [-1,0,1,2,-1,-4]
# -4, -1, -1, 0, 2




#  b a b a d














