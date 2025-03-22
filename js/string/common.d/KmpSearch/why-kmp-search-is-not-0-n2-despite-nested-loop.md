# Why KMP Search is Not O(n²) Despite Nested Loop

Great question! At first glance, the nested structure of the KMP algorithm's search phase might make it seem like the time complexity is worse than O(n). However, the key insight lies in how the while loop operates and how often it executes. Let’s break it down:

## Why the Complexity is O(n)

### Outer Loop (for loop):
- Iterates over each character in the text (length n).
- This contributes O(n) to the time complexity.

### Inner Loop (while loop):
- Adjusts the pattern index `j` using the prefix table when a mismatch occurs.
- The while loop does not run for every iteration of the for loop. Instead, it runs only when there is a mismatch, and it adjusts `j` based on the prefix table.

### Key Observation:
- The total number of times `j` is decremented (via `j = prefixTable[j - 1]`) is bounded by the number of times it is incremented.
- Since `j` is incremented at most n times (once per character in the text), it can also be decremented at most n times across all iterations of the for loop.
- Therefore, the while loop contributes O(n) in total across all iterations of the for loop.

### Total Complexity:
- Outer loop: O(n)
- Inner loop: O(n) (amortized over all iterations)
- Total: O(n + n) = O(n).

## Intuitive Explanation
- The while loop is not independent of the for loop. It only runs when there is a mismatch, and it "rewinds" `j` using the prefix table.
- The prefix table ensures that `j` never goes back too far—it only resets to the length of the longest prefix that is also a suffix.
- This means the total work done by the while loop across all iterations of the for loop is proportional to n.

## Example Walkthrough
Consider:
- `text = "abababc"`
- `pattern = "ababc"`
- Prefix table for pattern: `[0, 0, 1, 2, 0]`

### Step-by-Step Execution:
1. `i = 0, j = 0`:
   - `text[0] = "a"`, `pattern[0] = "a"` → Match.
   - Increment `j` to 1.

2. `i = 1, j = 1`:
   - `text[1] = "b"`, `pattern[1] = "b"` → Match.
   - Increment `j` to 2.

3. `i = 2, j = 2`:
   - `text[2] = "a"`, `pattern[2] = "a"` → Match.
   - Increment `j` to 3.

4. `i = 3, j = 3`:
   - `text[3] = "b"`, `pattern[3] = "b"` → Match.
   - Increment `j` to 4.

5. `i = 4, j = 4`:
   - `text[4] = "a"`, `pattern[4] = "c"` → Mismatch.
   - Use prefix table: `j = prefixTable[3] = 2`.
   - Now, `j = 2`.

6. `i = 4, j = 2`:
   - `text[4] = "a"`, `pattern[2] = "a"` → Match.
   - Increment `j` to 3.

7. `i = 5, j = 3`:
   - `text[5] = "b"`, `pattern[3] = "b"` → Match.
   - Increment `j` to 4.

8. `i = 6, j = 4`:
   - `text[6] = "c"`, `pattern[4] = "c"` → Match.
   - Pattern fully matched. Return starting index.

## Why the while Loop Doesn’t Make It O(n²)
- The while loop doesn’t run for every iteration of the for loop. It only runs when there is a mismatch, and even then, it adjusts `j` in a way that ensures the total work done is proportional to n.
- The prefix table ensures that `j` doesn’t reset to 0 every time—it only falls back to the length of the longest prefix that is also a suffix, minimizing redundant comparisons.

## Conclusion
The KMP algorithm achieves O(n) time complexity because the total work done by the while loop is amortized over the for loop. The prefix table ensures that the algorithm avoids unnecessary comparisons, making it highly efficient for substring search. This is why KMP is a cornerstone of string matching algorithms!