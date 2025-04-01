
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
// Custom
const isPalindromC = str => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true
}

// Count the Number of Vowels - Built in function
const countVowels = string => (string.match(/[a,e,i,o,u]/gi) || []).length;
// Custom 7
const countVowelsC = str => {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++)
        for (let j = 0; j < vowels.length; j++)
            if (str[i] === vowels[j]) {
                count++;
                break
            }
    return count
}

// Find the First Non-Repeating Character - Built in funcs
const findFirstNonRepeatingCharacter = string => {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i]))
            return string[i]
    }
    return null
}
// Custom 1
const findFirstNonRepeatingCharacterC = str => {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }

    const freqKeys = Object.keys(freq);

    for (let i = 0; i < freqKeys.length; i++) {
        if (freq[freqKeys[i]] === 1) {
            return freqKeys[i]
        }
    }
}

// Custom 2
const findFirstNonRepeatingCharacterC2 = str => {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1)
            delete freq[str[i]]
        else freq[str[i]] = 1
    }

    return Object.keys(freq)[0];

}
// Custom 3 - better
const findFirstNonRepeatingCharacterC3 = str => {
    const freq = {};

    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }

    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1)
            return str[i]
    }
    return null
}


// Remove Duplicates from a String - Built in funtions
const removeDuplicates = str => [...new Set(str)].join('');
// Custom
const removeDuplicatesC = str => {
    const seen = {};
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (!seen[str[i]]) {
            seen[str[i]] = true;
            result += str[i];
        }
    }
    return result
}


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
// 7
const isAnagramC = (s1, s2) => {
    if (s1.length !== s2.length)
        return false;

    const count = {}
    for (let i = 0; i < s1.length; i++) {
        count[s1[i]] = (count[s1[i]] || 0) + 1;
        count[s2[i]] = (count[s2[i]] || 0) - 1;

    }
    for (let key in count) {
        if (count[key] !== 0)
            return false
    }
    return true
}

const titleCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
/*
    algo
    - result = 0
    - shouldCapitalize = true
    - loop through each character
    --- If It's a small case letter append a capital version in result
    --- set shouldCapitalize = false
    --- Otherwise append it as it is
    --- if it's a space shouldCapitalize = true
 */
// 7
const titleCaseC = str => {
    let capitalize = true;
    let result = '';

    for(let i =0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if(capitalize && code >= 97 && code <= 122)
            result += String.fromCharCode(code - 32)
        else if(!capitalize && code >= 65 && code <= 90)
            result += String.fromCharCode(code + 32)
        else result += str[i]

        capitalize = code === 3
    }
    return result
}

const longestWord = str => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "")

/*
Algo
    - traverse through string
    - longest
    - current
    - if space longest vs current
 */
// 7
const longestWordC = str => {
    let current = longest = '';
    for(let i =0; i <= str.length; i++){
        if(str[i] === ' ' || i === str.length){
            if(current.length > longest.length)
                longest = current
            current = ''
        }else current+=str[i]
    }
    return longest
}



const charCount = (str, char) => str.split('').filter(c => c === char).length
// 7
const charCountC = (s, c) => {
    let cn = 0;
    for(let i = 0; i < s.length; i++)
        if(s[i] === c)
            cn++
    return cn
}


const isOnlyDigits = str => /^\d+$/.test(str)
const isOnlyDigitsC = str => {
    for(let i = 0; i < str.length; i++)
        if(str[i] < '0' || str[i] > '9')
            return false

    return true
}
const replaceSpaces = str => str.replace(/\s+/g, "*")

const reverseWords = str => str.split(' ').reverse().join(' ')
const reverseWordsC = str => {
    let result = word = '', i = 0, l = str.length;
    for(;i<=l;i++){
        if(str[i]===' '||i===l){
            result = word + ' '+ result
            word = ''
        }else {
            word+=str[i]
        }
    }
    return result
}
// console.log(reverseWordsC("hello world how are you?")); // "world hello"
const toCamelCase = str => str.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')

const isSmall = code => code >= 97 && code <= 122;
const isCapital = code => code >= 52 && code <= 90;
const toSmall = code => isCapital(code) && String.fromCharCode(code + 32);
const toCapital = code => isSmall(code) && String.fromCharCode(code - 32);
const toCamelCaseC = str => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if(i===0)
            result += toSmall(code) || str[i]
        else {
            const newWordAhead = str[i] === ' ';
            result += (newWordAhead ? toCapital(str.charCodeAt(++i)) : toSmall(code)) || str[i]
        }
    }
    return result
}
// console.log(toCamelCaseC("Hello world ExamplE")); // "helloWorldExample"
const isRotation = (s1, s2) => s1.length === s2.length && (s1 + s1).includes(s2)
const isRotationBackTracking = (s1, s2) => {
    if(s1.length !== s2.length)
        return false

    const db = s1+s1;
    let s2i = 0;

    for(let i=0;i<db.length;i++){
        if(i > s2.length && s2i === 0)
            return false
        if(db[i] === s2[s2i])
            s2i++
        else if(s2i > 0){
            s2i = 0;
            i--
        }
        if(s2i === s2.length)
            return true
    }
    return false
}

const contains = (s1,s2,start) => {
    for(let i = 0; i < s2.length; i++){
        if(s1[start] !== s2[i])
            return false
        start++
    }
    return true
}

const isRotationHeuristics = (s1,s2) => {
    if(s1.length !== s2.length)
        return false

    const double = s1 + s1;
    const l = s2.length - 1;
    let validEnd = l - 1

    while(validEnd < double.length){
        if(contains(double, s2, validEnd - (l - 1))){
            return true
        }
        validEnd++
    }
    return false
}
// console.log(isRotationHeuristics("bcccdcbaccbb", "dcbaccbbbccc")); // true ccbbbcccdcba dcbaccbbbccc
// console.log(isRotationHeuristics("hello", "lohel")); // true
// console.log(isRotationHeuristics("hello", "olelh")); // false
// console.log(isRotationHeuristics("aab", "aba")); // true
// console.log(isRotationHeuristics("abc", "cab")); // true
// console.log(isRotationHeuristics("aaaaa", "aaaaa")); // true
// console.log(isRotationHeuristics("abcd", "acbd")); // false   abcd abcd
const buildPrefixTable = pattern => {
    const prefixTable = new Array(pattern.length).fill(0)
    let j = 0
    for(let i = 1; i < pattern.length; i ++){
        while(j > 0 && pattern[i] !== pattern[j])
            j = prefixTable[j - 1]

        if(pattern[i] === pattern[j])
            j++
        prefixTable[i] = j

    }
    return prefixTable;
}

/// <reference path="./docs.d.ts" />
/**
 * @reference path="./docs.d.ts"
 *
 */
const kmpSearch = (text, pattern) => {
    const prefixTable = buildPrefixTable(pattern);
    let j = 0;

    for(let i = 0; i < text.length; i++){
        while(j > 0 && text[i] !== pattern[j])
            j = prefixTable[j - 1]
        if(text[i] === pattern[j]){
            j++;
            if(j === pattern.length)
                return i - j + 1
        }
    }
    return -1
}

const isRotationKmp = (s1, s2) => {
    if(s1.length !== s2.length)
        return false
    return kmpSearch(s1+s1, s2) !== - 1
}


// console.log(isRotationKmp("bcccdcbaccbb", "dcbaccbbbccc")); // true ccbbbcccdcba dcbaccbbbccc"))
// console.log(isRotationKmp("dcbaccbbbccc", "xcccdcbaccbb" )); // true ccbbbcccdcba dcbaccbbbccc"))
// console.log(kmpSearch('cccabcabc', 'abc'))
// console.log(buildPrefixTable("abcabc"))
// console.log(buildPrefixTable("dadddd"))



const removeNonAlphanumeric = str => str.replace(/[^a-z0-9]/gi, "")

// 7
const removeNonAlphanumericC = str => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if(
            code >= 48 && code <= 57 ||
            code >= 65 && code <= 90 ||
            code >= 97 && code <= 122
        ) result+= str[i]
    }
    return result
}

// console.log(removeNonAlphanumericC("Hello, World!123")); // "HelloWorld123"
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
const longestCommonPrefixC = arr => {
    if(arr.length === 0) return '';
    let prefix = arr[0]
    for(let i = 0; i < arr.length; i++){
        let j = 0;
        while(j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j])
            j++

        prefix = prefix.slice(0, j)
        if(prefix === '') return ''
    }
    return prefix
}

console.log(longestCommonPrefixC(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefixC(["dog", "racecar", "car"])); // ""











