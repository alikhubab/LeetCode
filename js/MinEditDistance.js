var minDistance = function(word1, word2) {
};


// iterate over word1
// for each character compare with word2
// for example for first character in word1 compare with first of word2
// It's not that we get the least steps in on iteration. we somehow need to run multiple iterations,
// or maybe exhaust all the possibilities.
// On appraoch could be try all operations on every character but that seems impractical

/*
I have an idea what if for each character we perform each action and compare the result with the word
to replace. We compare by adding up the character codes. we keep the difference for each operation on
each character and once we are done for iteration we perform the operation causing the least difference

ehors ors



Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')


Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')


Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
 */