import time
import tracemalloc
# Time Complexity: O(n)
def is_palindrome(s: str):
    start, end = 0, len(s) - 1

    while start < end:
        if s[start] != s[end]:
            return False
        start += 1
        end -= 1

    return True

# Time Complexity: O(n^3)
def longest_palindrome_substring(s: str):
    longest = ""
    for i in range(len(s)):
        for j in range(i + 1, len(s)):

            sub = s[i:j+1]
            if is_palindrome(sub):
                if len(sub) > len(longest):
                    longest = sub
    return longest
count = 1
def lps(s: str):
    global count
    count += 1
    start, end = 0, len(s) - 1
    print(s, is_palindrome(s[start: end + 1]))
    while start < end:
        if is_palindrome(s[start: end + 1]):
            return s[start: end + 1]
        else:
            left = lps(s[start: end])
            right = lps(s[start + 1: end + 1])
            middle = lps(s[start + 1: end])
            if len(left) > len(right):
                if len(left) > len(middle):
                    return left
                return middle
            if len(right) > len(middle):
                return right
            return middle



tracemalloc.start()
start = time.time()

# result1 = longest_palindrome_substring("abaabassttssttsstt")
result2 = lps("lkkaba")
# result2 = lps("abaabassttssttsstt")
print('count-->', count)

# isEqual = result1 == result2
# print("isEqual-->", isEqual)

end = time.time()
current, peak = tracemalloc.get_traced_memory()
tracemalloc.stop()

print("Result:", result2)
print("Time taken:", end - start, "seconds")
print(f"Memory used: {current / 1024:.2f} KB")
print(f"Peak memory: {peak / 1024:.2f} KB")
