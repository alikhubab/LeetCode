const ss = "abcabc"

const isWindowMoveable = (windowEnd, strLength) => {
    return windowEnd < strLength
}

const moveWindow = (windowStart, windowEnd) => {
    return [++windowStart, ++windowEnd]
}


const shortenWindow = (windowStart, windowEnd, by) => {
    return [0, windowEnd - by]
}

const longestSubstringWithoutRepeatingChar = (str = "abcabc") => {
    let windowStart = 0
    let windowEnd = str.length

    let fromEnd = 0;
    while (true){
        if(!hasRepeatingChar(str.slice(windowStart, windowEnd)))
            return str.slice(windowStart, windowEnd)
        else if(isWindowMoveable(windowEnd, str.length)){
            [windowStart, windowEnd] = moveWindow(windowStart, windowEnd)
        }else{
            [windowStart, windowEnd] = shortenWindow(windowStart, windowEnd, fromEnd)
            fromEnd ++;
        }
    }
}

const hasRepeatingChar = (str = "abc") => {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        if (map.has(char)) {
            return true
        }
        map.set(char, char)
    }
    return false
}







// maxLength = 0 , 0, 2, 1, 2, 2
const longestSubStr = (str = "abccab") => {
    let windowStart = 0;
    let maxLength = 0;

    let seen = new Set()
    for(let windowEnd = 0; windowEnd < str.length; windowEnd ++){
        const char = str[windowEnd]

        while (seen.has(char)){
            seen.delete(char)
            windowStart++
        }

        seen.add(char)
        maxLength = Math.max(maxLength, windowEnd - windowStart )
    }
}

const longestSubstringWithoutRepeatingCharGPT = (str = "abcabc") => {
    let windowStart = 0;
    let maxLength = 0;
    const seen = new Set();
    // let maxSubstring = ""; // Store the longest substring

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        // If the character is already in the set, shrink the window from the left.
        while (seen.has(char)) {
            seen.delete(str[windowStart]);
            windowStart++;
        }

        // Add the current character to the set and update max length.
        seen.add(char);
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    }

    return maxLength
};

console.log(longestSubstringWithoutRepeatingCharGPT("pwwkew"));


// console.log(longestSubstringWithoutRepeatingChar("aaaaafg"))
