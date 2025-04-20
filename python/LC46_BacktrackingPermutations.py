from typing import List


# 7
# Time Complexity:
def find_permutations(arr):
    result = []
    if len(arr) == 1:
        return [arr[:]]
    for _ in arr:
        n = arr.pop(0)
        perms = find_permutations(arr)
        for perm in perms:
            perm.append(n)
        result.extend(perms)
        arr.append(n)
    return result


print(len(find_permutations([1,2,3,4,5])))