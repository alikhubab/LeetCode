from typing import List


def max_product(nums: List[int]) -> int:
    res = max(nums)
    cur_max = cur_min = 1

    for n in nums:
        if n == 0:
            cur_max = cur_min = 1
            continue
        tmp = n * cur_max
        cur_max = max(tmp, n * cur_min, n)
        cur_min = min(tmp, n * cur_min, n)
        res = max(cur_max, res)

    return res




print(max_product((1, 2, 3, -9)))
