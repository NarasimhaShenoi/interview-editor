function checkNumber(num) {
    if(isNaN(num)) return true;                 // approach 1
    if(typeof num === 'number') return true;    // approach 2
    return false;
}

function isNumber(character) {
    return (/[0-9]/).test(character);           // approach 3
}

checkNumber() // true isNaN is not good approach 
checkNumber(undefined) // true isNaN is not good approach 


function isCharacter(character) {
    return (/[a-zA-Z]/).test(character);
}
