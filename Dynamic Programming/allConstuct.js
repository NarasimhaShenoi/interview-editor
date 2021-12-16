const allConstruct = (target, wordBank, memo= {}) => {
    if (target in memo) return memo[target];
    if (target === '')  return [[]];

    let result = [];
    for(let word of wordBank) {
        if (target.indexOf(word) == 0){
            const suffix =  target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(suffixWay => [word, ...suffixWay]);
            result.push(...targetWays);
        }
    }

    memo[target] =  result;
    return result;
}

console.log(allConstruct('aaabcde', ['a', 'aa','b','c','d','e']));