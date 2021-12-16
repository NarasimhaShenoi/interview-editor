const countConstruct = (target, wordBank, memo ={}) => {
    if (target in memo) return memo[target];
    if (target === 0) return 1;

    let totalWays = 0;
    for(let word of wordBank) {
        if(target - word >= 0) {
            const countForRemainingSuffix = countConstruct(target - word, wordBank, memo);
            totalWays +=  countForRemainingSuffix;
        }
    }
    memo[target] = totalWays;
    return memo[target];
}

console.log(countConstruct(3, [1,2]))