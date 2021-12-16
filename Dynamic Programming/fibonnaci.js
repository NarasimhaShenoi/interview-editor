const fibonnaci = (position, memo = {}) => {
    if (position in memo) return memo[position];
    if (position<=2) return 1;
    
    memo[position] = fibonnaci(position - 1, memo) + fibonnaci(position - 2, memo);
    return memo[position];
}

console.log(fibonnaci(50));