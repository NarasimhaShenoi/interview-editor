const countConstruct = (target, wordBank, memo ={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalWays = 0;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const countForRemainingSuffix = countConstruct(target.slice(word.length), wordBank, memo);
            totalWays +=  countForRemainingSuffix;
        }
    }
    memo[target] = totalWays;
    return memo[target];
}

console.log(countConstruct('helolo', ['h','lo','e', 'l', 'o']))