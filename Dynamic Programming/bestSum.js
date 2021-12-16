/**
 * shortest way to get the targetSum
 */

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestSum = null;

    for(let num of numbers) {
        const remainder =  targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const shortestCombination = [...remainderCombination, num];
            if (shortestSum === null || shortestCombination.length < shortestSum.length) {
                shortestSum = shortestCombination;
            }
        }
    }

    memo[targetSum] = shortestSum;
    return shortestSum;
}

console.log(bestSum(100, [5,3,4,17, 25]));