// strings are anagram if they have same characters, but rearranged
function countOfLettersInString(str) {
  let strArray = str.split("");
  return strArray.reduce(function (acc, curr) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

function areObjectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let i = 0; i < keys1.length; i++) {
    if (obj1[keys1] !== obj2[keys1]) return false;
  }
  return true;
}

function checkAnangram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return areObjectsEqual(countOfLettersInString(str1), countOfLettersInString(str2));
}

console.log(checkAnangram("cats", "atc"));
console.log(checkAnangram("night", "thing"));