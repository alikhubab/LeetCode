// Using built in functions
const reverseStringB = (str) => {
    return str.split('').reverse().join('');
}
// Without using builtin functions 7
const reverseStringC = str => {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--)
        reverse += str[i]

    return reverse
}

// Check if a String is a Palindrome -- Built in functions
const isPalindrom = string => string === string.split('').reverse().join('');
// Custom 7
const isPalindromC = str => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true
}

console.log(isPalindrom("skakaks"))

const countVowels = string => (string.match(/[a,e,i,o,u]/gi) || []).length;

const findFirstNonRepeatingCharacter = string => {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i]))
            return string[i]
    }
    return null
}
const removeDuplicates = str => [...new Set(str)].join('');
const mostFrequentChar = string => {
    const freq = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of string) {
        freq[char] = (freq[char] || 0) + 1;
        if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxChar = char
        }
    }
    return maxChar
}

const isAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('')
const titleCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
const longestWord = str => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "")
const charCount = (str, char) => str.split('').filter(c => c === char).length
const isOnlyDigits = str => /^\d+$/.test(str)
const replaceSpaces = str => str.replace(/\s+/g, "*")
const reverseWords = str => str.split(' ').reverse().join(' ')
const toCamelCase = str => str.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')
const isRotation = (s1, s2) => s1.length === s2.length && (s1 + s1).includes(s2)
const removeNonAlphanumeric = str => str.replace(/[^a-z0-9]/gi, "")
const toSnakeCase = str => str.toLowerCase().replace(/\s+/g, "_")
const findSubstrings = s => {
    const subs = [];
    for (let i = 0; i < s.length; i++)
        for (let j = i + 1; j <= s.length; j++)
            subs.push(s.slice(i, j))
    return subs
}
const isBalanced = str => {
    const stack = []
    const map = {"[": "]", "{": "}", "(": ")"};

    for (let s of str) {
        if (map[s]) {
            stack.push(s)
        } else if (Object.values(map).includes(s)) {
            if (map[stack.pop()] !== s)
                return false
        }
    }
    return stack.length === 0
}
const longestCommonPrefix1 = arr => {
    if (arr.length === 0) return '';

    let lcp = arr[0];

    for (let str of arr.splice(1)) {
        let common = '';
        for (let i = 0; i < str.length; i++) {

            if (lcp[i] === str[i])
                common += lcp[i]

        }
        lcp = common

    }
    return lcp
}
const longestCommonPrefix = arr => {
    if (arr.length === 0) return '';
    let prefix = arr[0];

    for (let word of arr) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1)
            if (!prefix) return ''
        }
    }

    return prefix

}