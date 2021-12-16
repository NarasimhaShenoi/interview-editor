/**
 * return one of the way we can get the sum
 */

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers) {
        const remainder =  targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null) {
            memo[targetSum] = [num, ...remainderResult];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

console.log(howSum(1000, [71,6]));