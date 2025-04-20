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

# Brute force
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
# With recursion but very slow Wrongly done with dfs. Even with BFS this wouldn't be very effective
# This has a bug
def lps(s: str):
    global count
    count += 1
    start, end = 0, len(s) - 1
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

# Time Complexity: O(n^2)
# Expanding Approach - Best of all the others in this file
def longest_palindrome_sub(s):
    le = len(s)
    if le < 2:
        return s
    res = ''
    res_len = 0
    start, end = 0, 0
    for i in range(le - 1):
        l, r = i, i
        while l >= 0 and r < le and s[l] == s[r]:
            l -= 1
            r += 1
        if r - l - 1 > res_len:  # Move outside while loop to skip extra condition check
            start, end = l + 1, r
            res_len = r - l - 1

        l, r = i, i + 1
        while l >= 0 and r < le and s[l] == s[r]:
            l -= 1
            r += 1
        if r - l - 1 > res_len:
            start, end = l + 1, r
            res_len = r - l - 1

    return s[start : end]




#  0 1 2 3 4 5 6
# 6 - 1 - 1


# Copied from leetcode -- Slower then the above
def longestPalindrome(s) -> str:
    if len(s) <= 1:
        return s

    def expand_from_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    max_str = s[0]

    for i in range(len(s) - 1):
        odd = expand_from_center(i, i)
        even = expand_from_center(i, i + 1)

        if len(odd) > len(max_str):
            max_str = odd
        if len(even) > len(max_str):
            max_str = even

    return max_str
# a b a a b a s s t t s  s  t  t  s  s  t  t
# 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17



# 7




tracemalloc.start()
start = time.time()

# result1 = longestPalindrome("abaabassttssttssttakljfkjsdfakljoweijrpoiuw3rp932u34pujkajkfjkjsfdlajknvnk;jsaflk;ja;lkfdjlkjdfalkj;dsfkja;kdjg;jl;fajlkdjfkljaf;jdjkshdjgkhfgjjjkjsdfkljfsldjlkdjflkdmnxcvmnvkjj;kfdakfj;sgkfgskddkkjgs;ldfjgklsjg;lksjfgkljflgkjslkjfgkfsdhgkhfgkjskg;skjlfgkljfsgkjk;dfgjkdjfghjksfhgkjfdlkgjvmcxnm,.nbvm,n.vkj;sdfkj;fjkljfipoquerpioupiorqeuioeurioweurjkfg;fjklsg;lkjfgksj;gdfk;ldsjfg;kjmv,nxbm,nvbn,.kjfgksjfgkjfkgjkfldgjsdkfjghfdgjfhgkjk;lsdjfihwerpiouewrokdjkfj;s;jklafj;kl;fad;jhkgf;djkhgk;sfdjgfgsjsk;kdfjgskjgs;kjdfgk;sldjfgkslfdjgkdlfgjksfdjgk;sfdjg;fg,mxc,.mx,.cvm,.xcvlsdjfkljfa;ljfka;sdfeieorkdjfsjdfkja;kdfjajdfihefeiwripwer;iudfk;lajfdsmn,xvmnv.mn;fdkjaf")
result1 = longest_palindrome_sub("abaabassttssttssttakljfkjsdfakljoweijrpoiuw3rp932u34pujkajkfjkjsfdlajknvnk;jsaflk;ja;lkfdjlkjdfalkj;dsfkja;kdjg;jl;fajlkdjfkljaf;jdjkshdjgkhfgjjjkjsdfkljfsldjlkdjflkdmnxcvmnvkjj;kfdakfj;sgkfgskddkkjgs;ldfjgklsjg;lksjfgkljflgkjslkjfgkfsdhgkhfgkjskg;skjlfgkljfsgkjk;dfgjkdjfghjksfhgkjfdlkgjvmcxnm,.nbvm,n.vkj;sdfkj;fjkljfipoquerpioupiorqeuioeurioweurjkfg;fjklsg;lkjfgksj;gdfk;ldsjfg;kjmv,nxbm,nvbn,.kjfgksjfgkjfkgjkfldgjsdkfjghfdgjfhgkjk;lsdjfihwerpiouewrokdjkfj;s;jklafj;kl;fad;jhkgf;djkhgk;sfdjgfgsjsk;kdfjgskjgs;kjdfgk;sldjfgkslfdjgkdlfgjksfdjgk;sfdjg;fg,mxc,.mx,.cvm,.xcvlsdjfkljfa;ljfka;sdfeieorkdjfsjdfkja;kdfjajdfihefeiwripwer;iudfk;lajfdsmn,xvmnv.mn;fdkjaf")
# result2 = longest_palindrome_sub("cbbd")


end = time.time()
current, peak = tracemalloc.get_traced_memory()
tracemalloc.stop()

print("Result1:", result1)
# print("Result2:", result2)
print("Time taken:", end - start, "seconds")
print(f"Memory used: {current / 1024:.2f} KB")
print(f"Peak memory: {peak / 1024:.2f} KB")
