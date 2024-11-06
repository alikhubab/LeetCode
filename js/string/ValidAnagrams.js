/*
Example:
Input: s = "anagram", t = "nagaram"
Output: true
Input: s = "rat", t = "car"
Output: false

*/

const validAnagrams = (str1 = "", str2 = "") => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

const validAnagrams2 = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length) return false;

  const count1 = {};
  const count2 = {};

  str1.split("").forEach((c) => (count1[c] = (count1[c] ?? 0) + 1));
  str2.split("").forEach((c) => (count2[c] = (count2[c] ?? 0) + 1));

  for (key in count1) if (count1[key] !== count2[key]) return false;

  return true;
};

const res = validAnagrams2("anagram", "magaras");

console.log(res);
