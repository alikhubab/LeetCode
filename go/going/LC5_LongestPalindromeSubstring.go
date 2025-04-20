package main

import "fmt"

func longestPalindrome(s string) string {
    if len(s) < 2 {
        return s
    }

    start, maxLength := 0, 1

    for i := 0; i < len(s); i++ {
        // Check odd-length palindromes (centered at i)
        l, r := i, i
        for l >= 0 && r < len(s) && s[l] == s[r] {
            l--
            r++
        }
        // Calculate actual palindrome length: (r-1) - (l+1) + 1 = r - l - 2 + 1 = r - l -1
        if length := r - l - 1; length > maxLength {
            maxLength = length
            start = l + 1
        }

        // Check even-length palindromes (centered between i and i+1)
        l, r = i, i+1
        for l >= 0 && r < len(s) && s[l] == s[r] {
            l--
            r++
        }
        if length := r - l - 1; length > maxLength {
            maxLength = length
            start = l + 1
        }
    }

    // Handle case where entire string is a palindrome
    if maxLength > len(s) {
        return s
    }
    return s[start : start+maxLength]
}

func main() {
    fmt.Println(longestPalindrome("babad")) // "bab" or "aba"
    fmt.Println(longestPalindrome("cbbd"))  // "bb"
}